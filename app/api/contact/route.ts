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
    if (error) console.log('[api/contact] supabase insert error:', error.message);
  } else {
    console.log('[api/contact] supabase not configured, skipping insert');
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
    } catch (err) {
      console.log('[api/contact] resend error:', err);
    }
  } else {
    console.log('[api/contact] resend not configured, skipping email');
  }

  console.log('[api/contact] done');
  return NextResponse.json({ ok: true });
}
