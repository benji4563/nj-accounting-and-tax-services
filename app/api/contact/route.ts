import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';
import { Resend } from 'resend';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  business_name?: string;
  revenue_range?: string;
  message: string;
  source?: string;
  switching_from_accountant?: string;
};

export async function POST(req: Request) {
  console.log('[api/contact] start');
  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    console.log('[api/contact] bad JSON');
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, message } = payload;
  if (!name || !email || !message) {
    console.log('[api/contact] missing required fields');
    return NextResponse.json({ error: 'Missing name, email, or message' }, { status: 400 });
  }

  // A lead is only "captured" if it reached at least one durable place —
  // the database or Njock's inbox. If both fail we must say so rather than
  // thanking the visitor for a message nobody will ever read.
  let savedToDb = false;
  let emailSent = false;

  // 1. Save to Supabase (if configured)
  const admin = createAdminClient();
  if (admin) {
    const { error } = await admin.from('contact_submissions').insert({
      name,
      email,
      phone: payload.phone || null,
      business_name: payload.business_name || null,
      revenue_range: payload.revenue_range || null,
      message,
      source: payload.source || '/contact',
      switching_from_accountant: payload.switching_from_accountant === 'true',
    });
    if (error) {
      console.error('[api/contact] supabase insert FAILED:', error.message);
    } else {
      savedToDb = true;
    }
  } else {
    console.error('[api/contact] supabase NOT CONFIGURED — no row written');
  }

  // 2. Notify Njock via Resend (if configured)
  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.NJ_NOTIFICATION_EMAIL;
  if (resendKey && notifyTo) {
    const resend = new Resend(resendKey);
    try {
      await resend.emails.send({
        from: 'NJ Website <no-reply@njaccountstax.com>',
        to: notifyTo,
        replyTo: email,
        subject: `New lead: ${name}${payload.business_name ? ` (${payload.business_name})` : ''}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          payload.phone && `Phone: ${payload.phone}`,
          payload.business_name && `Business: ${payload.business_name}`,
          payload.revenue_range && `Revenue: ${payload.revenue_range}`,
          `Switching from another accountant: ${payload.switching_from_accountant === 'true' ? 'Yes' : 'No'}`,
          `Source: ${payload.source || '/contact'}`,
          '',
          'Message:',
          message,
        ]
          .filter(Boolean)
          .join('\n'),
      });
      emailSent = true;
    } catch (err) {
      console.error('[api/contact] resend FAILED:', err);
    }
  } else {
    console.error('[api/contact] resend NOT CONFIGURED — no email sent');
  }

  // Nothing was captured anywhere. Tell the visitor the truth and give them
  // a route that does not depend on this endpoint — losing a lead silently
  // is strictly worse than showing an error.
  if (!savedToDb && !emailSent) {
    console.error('[api/contact] LEAD LOST — both Supabase and Resend failed', {
      name,
      email,
      business_name: payload.business_name,
      message,
    });
    return NextResponse.json(
      {
        error:
          'We could not deliver your message. Please email njock@njaccountstax.com ' +
          'directly, or book a call at cal.com/njock/discovery — sorry about that.',
      },
      { status: 502 },
    );
  }

  console.log('[api/contact] captured', { savedToDb, emailSent });
  return NextResponse.json({ ok: true, savedToDb, emailSent });
}
