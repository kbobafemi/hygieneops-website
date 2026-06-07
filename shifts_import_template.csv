-- HygieneOps SaaS MVP database schema for Supabase/PostgreSQL
-- Run in Supabase SQL Editor after creating a new project.
-- IMPORTANT: Do not disable Row-Level Security for production.

begin;

create extension if not exists pgcrypto;

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  trading_name text,
  company_number text,
  domain text,
  email text,
  phone text,
  address text,
  status text not null default 'pilot' check (status in ('pilot','active','paused','archived')),
  settings jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  company_id uuid references public.companies(id) on delete set null,
  full_name text,
  email text,
  role text not null default 'company_admin' check (role in ('super_admin','company_admin','ops_manager','supervisor','hygiene_partner','client_user','finance')),
  status text not null default 'active' check (status in ('active','invited','suspended','archived')),
  last_seen_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.public_leads (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete set null,
  name text not null,
  email text not null,
  organisation text,
  interest_type text,
  phone text,
  message text,
  source text default 'hygieneops.co.uk',
  status text not null default 'new' check (status in ('new','qualified','proposal','pilot','closed','spam')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  name text not null,
  organisation_type text,
  sector text,
  primary_contact_name text,
  primary_contact_email text,
  primary_contact_phone text,
  billing_email text,
  status text not null default 'prospect' check (status in ('prospect','active','paused','closed')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.sites (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  name text not null,
  address text,
  city text,
  postcode text,
  site_type text,
  access_instructions text,
  geofence_lat numeric,
  geofence_lng numeric,
  geofence_radius_m integer default 150,
  status text not null default 'active' check (status in ('active','pending','paused','closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contracts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  site_id uuid references public.sites(id) on delete set null,
  contract_reference text,
  lpo_reference text,
  scope text not null,
  rates jsonb not null default '{}'::jsonb,
  vat_treatment text,
  payment_terms text,
  service_level text,
  start_date date,
  renewal_date date,
  cancellation_notice text,
  status text not null default 'draft' check (status in ('draft','active','renewal_due','expired','cancelled')),
  document_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_inspections (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  inspector_id uuid references public.profiles(id) on delete set null,
  inspection_date date not null default current_date,
  condition_summary text,
  risk_level text default 'medium' check (risk_level in ('low','medium','high','critical')),
  materials_required text,
  equipment_required text,
  ppe_required text,
  hazards text,
  access_notes text,
  supervisor_recommendation text,
  status text not null default 'draft' check (status in ('draft','submitted','approved','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.workers (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  profile_id uuid references public.profiles(id) on delete set null,
  full_name text not null,
  email text,
  phone text,
  role text default 'hygiene_partner',
  right_to_work_status text default 'pending' check (right_to_work_status in ('pending','verified','expired','not_required','rejected')),
  dbs_status text default 'not_required' check (dbs_status in ('not_required','pending','eligible','verified','expired','rejected')),
  training_status text default 'pending' check (training_status in ('pending','in_progress','complete','expired')),
  emergency_contact_name text,
  emergency_contact_phone text,
  availability jsonb not null default '{}'::jsonb,
  status text not null default 'active' check (status in ('active','inactive','suspended','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.worker_documents (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  worker_id uuid not null references public.workers(id) on delete cascade,
  document_type text not null,
  document_path text,
  status text not null default 'pending' check (status in ('pending','verified','expired','rejected')),
  expiry_date date,
  verified_by uuid references public.profiles(id) on delete set null,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.shifts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  contract_id uuid references public.contracts(id) on delete set null,
  shift_type text,
  start_time timestamptz not null,
  end_time timestamptz not null,
  required_workers integer not null default 1,
  route_instructions text,
  status text not null default 'scheduled' check (status in ('scheduled','in_progress','completed','cancelled','exception')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint shifts_end_after_start check (end_time > start_time)
);

create table if not exists public.shift_assignments (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  shift_id uuid not null references public.shifts(id) on delete cascade,
  worker_id uuid not null references public.workers(id) on delete cascade,
  assignment_status text not null default 'assigned' check (assignment_status in ('assigned','accepted','declined','substituted','completed','no_show')),
  overtime_flag boolean not null default false,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (shift_id, worker_id)
);

create table if not exists public.attendance_logs (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  shift_id uuid not null references public.shifts(id) on delete cascade,
  worker_id uuid not null references public.workers(id) on delete cascade,
  event_type text not null check (event_type in ('clock_in','clock_out','break_start','break_end','exception')),
  event_time timestamptz not null default now(),
  latitude numeric,
  longitude numeric,
  proof_method text default 'mobile' check (proof_method in ('mobile','gps','geofence','qr','nfc','manual')),
  exception_notes text,
  supervisor_approved_by uuid references public.profiles(id) on delete set null,
  supervisor_approved_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.task_templates (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  name text not null,
  frequency text,
  checklist jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  site_id uuid not null references public.sites(id) on delete cascade,
  shift_id uuid references public.shifts(id) on delete cascade,
  title text not null,
  description text,
  frequency text,
  required_evidence boolean not null default false,
  status text not null default 'scheduled' check (status in ('scheduled','in_progress','completed','issue','cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.task_completions (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  task_id uuid not null references public.tasks(id) on delete cascade,
  shift_id uuid references public.shifts(id) on delete cascade,
  worker_id uuid references public.workers(id) on delete set null,
  completion_status text not null default 'completed' check (completion_status in ('completed','issue','skipped','client_rejected')),
  notes text,
  completed_at timestamptz not null default now(),
  supervisor_signed_by uuid references public.profiles(id) on delete set null,
  client_accepted_by uuid references public.profiles(id) on delete set null,
  client_accepted_at timestamptz
);

create table if not exists public.evidence_files (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  site_id uuid references public.sites(id) on delete cascade,
  shift_id uuid references public.shifts(id) on delete cascade,
  task_completion_id uuid references public.task_completions(id) on delete cascade,
  uploaded_by uuid references public.profiles(id) on delete set null,
  file_path text not null,
  file_type text,
  caption text,
  created_at timestamptz not null default now()
);

create table if not exists public.chat_channels (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  site_id uuid references public.sites(id) on delete cascade,
  name text not null,
  channel_type text not null default 'site' check (channel_type in ('site','client','internal','incident')),
  status text not null default 'active' check (status in ('active','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.chat_channel_members (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  channel_id uuid not null references public.chat_channels(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(channel_id, profile_id)
);

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  channel_id uuid not null references public.chat_channels(id) on delete cascade,
  sender_id uuid references public.profiles(id) on delete set null,
  message text not null,
  priority text not null default 'normal' check (priority in ('normal','action_required','urgent')),
  created_at timestamptz not null default now()
);

create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  contract_id uuid references public.contracts(id) on delete set null,
  invoice_reference text,
  period_start date,
  period_end date,
  subtotal numeric(12,2) default 0,
  vat_amount numeric(12,2) default 0,
  total_amount numeric(12,2) generated always as (coalesce(subtotal,0) + coalesce(vat_amount,0)) stored,
  status text not null default 'draft' check (status in ('draft','approved','sent','paid','void')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.import_batches (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  imported_by uuid references public.profiles(id) on delete set null,
  source_system text,
  record_type text not null,
  file_name text,
  row_count integer default 0,
  status text not null default 'preview' check (status in ('preview','mapped','imported','failed','cancelled')),
  mapping jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.import_records (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  import_batch_id uuid not null references public.import_batches(id) on delete cascade,
  source_row jsonb not null,
  target_table text,
  target_record_id uuid,
  status text not null default 'pending' check (status in ('pending','imported','failed','skipped')),
  error_message text,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete cascade,
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Add updated_at triggers. Safe to rerun.
do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'companies','profiles','public_leads','clients','sites','contracts','site_inspections','workers','worker_documents',
    'shifts','shift_assignments','task_templates','tasks','chat_channels','invoices','import_batches'
  ] loop
    execute format('drop trigger if exists set_%I_updated_at on public.%I', table_name, table_name);
    execute format('create trigger set_%I_updated_at before update on public.%I for each row execute function public.set_updated_at()', table_name, table_name);
  end loop;
end;
$$;

create or replace function public.current_company_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select company_id from public.profiles where id = auth.uid();
$$;

create or replace function public.current_user_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select role from public.profiles where id = auth.uid();
$$;

create or replace function public.has_role(allowed_roles text[])
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(public.current_user_role() = any(allowed_roles), false);
$$;

-- Enable Row-Level Security.
alter table public.companies enable row level security;
alter table public.profiles enable row level security;
alter table public.public_leads enable row level security;
alter table public.clients enable row level security;
alter table public.sites enable row level security;
alter table public.contracts enable row level security;
alter table public.site_inspections enable row level security;
alter table public.workers enable row level security;
alter table public.worker_documents enable row level security;
alter table public.shifts enable row level security;
alter table public.shift_assignments enable row level security;
alter table public.attendance_logs enable row level security;
alter table public.task_templates enable row level security;
alter table public.tasks enable row level security;
alter table public.task_completions enable row level security;
alter table public.evidence_files enable row level security;
alter table public.chat_channels enable row level security;
alter table public.chat_channel_members enable row level security;
alter table public.chat_messages enable row level security;
alter table public.invoices enable row level security;
alter table public.import_batches enable row level security;
alter table public.import_records enable row level security;
alter table public.audit_logs enable row level security;

-- Public leads: anonymous visitors may create, but cannot read existing leads.
drop policy if exists public_leads_insert_anyone on public.public_leads;
create policy public_leads_insert_anyone on public.public_leads
for insert to anon, authenticated
with check (true);

drop policy if exists public_leads_read_admins on public.public_leads;
create policy public_leads_read_admins on public.public_leads
for select to authenticated
using (public.has_role(array['super_admin','company_admin','ops_manager']));

drop policy if exists public_leads_update_admins on public.public_leads;
create policy public_leads_update_admins on public.public_leads
for update to authenticated
using (public.has_role(array['super_admin','company_admin','ops_manager']))
with check (public.has_role(array['super_admin','company_admin','ops_manager']));

-- Company and profile policies.
drop policy if exists companies_select_own on public.companies;
create policy companies_select_own on public.companies
for select to authenticated
using (id = public.current_company_id() or public.has_role(array['super_admin']));

drop policy if exists companies_update_admin on public.companies;
create policy companies_update_admin on public.companies
for update to authenticated
using (id = public.current_company_id() and public.has_role(array['company_admin','super_admin']))
with check (id = public.current_company_id() and public.has_role(array['company_admin','super_admin']));

drop policy if exists profiles_select_company on public.profiles;
create policy profiles_select_company on public.profiles
for select to authenticated
using (company_id = public.current_company_id() or id = auth.uid() or public.has_role(array['super_admin']));

drop policy if exists profiles_update_self_or_admin on public.profiles;
create policy profiles_update_self_or_admin on public.profiles
for update to authenticated
using (id = auth.uid() or (company_id = public.current_company_id() and public.has_role(array['company_admin','super_admin'])))
with check (id = auth.uid() or (company_id = public.current_company_id() and public.has_role(array['company_admin','super_admin'])));

-- Generic tenant policies for company-owned tables.
do $$
declare
  t text;
begin
  foreach t in array array[
    'clients','sites','contracts','site_inspections','workers','worker_documents','shifts','shift_assignments','attendance_logs',
    'task_templates','tasks','task_completions','evidence_files','chat_channels','chat_channel_members','chat_messages','invoices',
    'import_batches','import_records','audit_logs'
  ] loop
    execute format('drop policy if exists %I_tenant_select on public.%I', t, t);
    execute format('create policy %I_tenant_select on public.%I for select to authenticated using (company_id = public.current_company_id() or public.has_role(array[''super_admin'']))', t, t);

    execute format('drop policy if exists %I_tenant_insert on public.%I', t, t);
    execute format('create policy %I_tenant_insert on public.%I for insert to authenticated with check (company_id = public.current_company_id() or public.has_role(array[''super_admin'']))', t, t);

    execute format('drop policy if exists %I_tenant_update on public.%I', t, t);
    execute format('create policy %I_tenant_update on public.%I for update to authenticated using (company_id = public.current_company_id() or public.has_role(array[''super_admin''])) with check (company_id = public.current_company_id() or public.has_role(array[''super_admin'']))', t, t);

    execute format('drop policy if exists %I_tenant_delete on public.%I', t, t);
    execute format('create policy %I_tenant_delete on public.%I for delete to authenticated using ((company_id = public.current_company_id() and public.has_role(array[''company_admin'',''ops_manager'',''super_admin''])) or public.has_role(array[''super_admin'']))', t, t);
  end loop;
end;
$$;

-- Useful indexes.
create index if not exists idx_profiles_company_id on public.profiles(company_id);
create index if not exists idx_public_leads_status on public.public_leads(status, created_at desc);
create index if not exists idx_clients_company_id on public.clients(company_id);
create index if not exists idx_sites_company_client on public.sites(company_id, client_id);
create index if not exists idx_contracts_company_client on public.contracts(company_id, client_id);
create index if not exists idx_workers_company_status on public.workers(company_id, status);
create index if not exists idx_shifts_company_start on public.shifts(company_id, start_time);
create index if not exists idx_attendance_shift_worker on public.attendance_logs(shift_id, worker_id, event_time);
create index if not exists idx_tasks_site_shift on public.tasks(site_id, shift_id);
create index if not exists idx_messages_channel_created on public.chat_messages(channel_id, created_at desc);
create index if not exists idx_audit_company_created on public.audit_logs(company_id, created_at desc);

commit;

-- =============================================================
-- AlphaOps AI Assistant, Website Chat and Social Inbox Upgrade
-- =============================================================
create table if not exists public.alphaops_knowledge_base (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references public.companies(id) on delete cascade,
  title text not null,
  category text not null default 'general',
  public_answer text not null,
  sensitivity_level text not null default 'public' check (sensitivity_level in ('public','internal','restricted')),
  approved boolean not null default false,
  approved_by uuid references auth.users(id),
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.alphaops_conversations (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references public.companies(id) on delete cascade,
  channel text not null default 'website_chat',
  source text not null default 'hygieneops.co.uk',
  visitor_name text,
  visitor_email text,
  organisation text,
  status text not null default 'open' check (status in ('open','escalated','closed','spam')),
  risk_level text not null default 'low' check (risk_level in ('low','medium','high')),
  escalation_reason text,
  assigned_to uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.alphaops_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.alphaops_conversations(id) on delete cascade,
  role text not null check (role in ('visitor','assistant','admin','system')),
  message text not null,
  safety_action text not null default 'none' check (safety_action in ('none','refused','escalated','redacted')),
  model_name text,
  token_estimate integer,
  created_at timestamptz not null default now()
);

create table if not exists public.social_inbox_items (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references public.companies(id) on delete cascade,
  platform text not null check (platform in ('facebook','instagram','linkedin','x','tiktok','threads','website','email')),
  external_thread_id text,
  external_message_id text,
  sender_handle text,
  sender_display_name text,
  message_text text not null,
  ai_suggested_reply text,
  final_reply text,
  status text not null default 'new' check (status in ('new','ai_drafted','approved','sent','escalated','closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.alphaops_knowledge_base enable row level security;
alter table public.alphaops_conversations enable row level security;
alter table public.alphaops_messages enable row level security;
alter table public.social_inbox_items enable row level security;

do $$ begin
  create policy "AlphaOps knowledge public approved read"
    on public.alphaops_knowledge_base for select
    using (approved = true and sensitivity_level = 'public');
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "AlphaOps conversation insert from public chat"
    on public.alphaops_conversations for insert
    with check (true);
exception when duplicate_object then null; end $$;

do $$ begin
  create policy "AlphaOps message insert from public chat"
    on public.alphaops_messages for insert
    with check (true);
exception when duplicate_object then null; end $$;

-- For production, replace broad public insert policies with authenticated API routes only.
-- Do not expose service role keys in frontend code. Use Edge Functions or Workers for OpenAI calls.
