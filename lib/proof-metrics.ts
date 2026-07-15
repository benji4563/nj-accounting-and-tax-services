/**
 * Proof metrics — live numbers used across the site.
 * Reads from Supabase `proof_metrics` table when available; falls back to
 * the launch-defaults below so the site renders even before DB is wired up.
 */
import { createServerClient } from '@/lib/supabase/server';

export type ProofMetrics = {
  clients_served_total: number;
  dollars_saved_total_usd: number;
  median_reply_hours_this_week: number;
  note: string | null;
  updated_at: string | null;
};

const LAUNCH_DEFAULTS: ProofMetrics = {
  clients_served_total: 42,
  dollars_saved_total_usd: 1_800_000,
  median_reply_hours_this_week: 3.2,
  note: 'as of launch',
  updated_at: null,
};

export async function getProofMetrics(): Promise<ProofMetrics> {
  try {
    const supabase = createServerClient();
    if (!supabase) return LAUNCH_DEFAULTS;

    const { data, error } = await supabase
      .from('proof_metrics')
      .select('*')
      .limit(1)
      .single();

    if (error || !data) return LAUNCH_DEFAULTS;
    return data as ProofMetrics;
  } catch {
    return LAUNCH_DEFAULTS;
  }
}

export function formatHours(h: number): string {
  const hours = Math.floor(h);
  const minutes = Math.round((h - hours) * 60);
  return `${hours}h ${String(minutes).padStart(2, '0')}m`;
}

export function formatDollars(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}
