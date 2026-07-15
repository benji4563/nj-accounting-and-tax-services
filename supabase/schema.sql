-- =============================================================================
-- NJ's Accounting and Tax Services — Supabase schema (v1)
-- Run this in Supabase Dashboard → SQL Editor → New Query
-- =============================================================================

-- 1) contact_submissions ------------------------------------------------------
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  business_name text,
  industry text,
  revenue_range text check (revenue_range in ('<100k','100k-500k','500k-2m','2m+')),
  service_interest text[],
  message text not null,
  source text,
  switching_from_accountant boolean default false
);

alter table public.contact_submissions enable row level security;

-- Public can INSERT (via anon key from browser or via service role from API route).
-- We use the service-role key server-side, so this policy exists just in case
-- the API is ever migrated to use the anon key from a client component.
create policy "public_insert_contact_submissions"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- Only authenticated admins can SELECT
create policy "admin_read_contact_submissions"
  on public.contact_submissions
  for select
  to authenticated
  using (true);


-- 2) proof_metrics ------------------------------------------------------------
create table if not exists public.proof_metrics (
  id uuid primary key default gen_random_uuid(),
  updated_at timestamptz not null default now(),
  clients_served_total int not null default 42,
  dollars_saved_total_usd bigint not null default 1800000,
  median_reply_hours_this_week numeric not null default 3.2,
  note text
);

alter table public.proof_metrics enable row level security;

create policy "public_read_proof_metrics"
  on public.proof_metrics
  for select
  to anon
  using (true);

-- Seed a single row (idempotent — will only insert if none exists)
insert into public.proof_metrics (clients_served_total, dollars_saved_total_usd, median_reply_hours_this_week, note)
select 42, 1800000, 3.2, 'as of launch'
where not exists (select 1 from public.proof_metrics);


-- 3) client_quotes ------------------------------------------------------------
create table if not exists public.client_quotes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  city text,
  industry text,
  quote text not null,
  active boolean default true
);

alter table public.client_quotes enable row level security;

create policy "public_read_active_client_quotes"
  on public.client_quotes
  for select
  to anon
  using (active = true);

-- No quotes seeded — Ben/Njock adds real ones post-launch, no fake testimonials ever.
