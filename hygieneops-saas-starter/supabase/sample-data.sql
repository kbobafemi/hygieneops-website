-- Optional demonstration data for HygieneOps.
-- Run after schema.sql. This does not create Supabase Auth users.

insert into public.companies (id, name, trading_name, domain, email, phone, status)
values ('11111111-1111-1111-1111-111111111111', 'AlphaBridge SmartOps Ltd', 'HygieneOps', 'hygieneops.co.uk', 'info@hygieneops.co.uk', '+447443365555', 'pilot')
on conflict (id) do nothing;

insert into public.public_leads (company_id, name, email, organisation, interest_type, message, source, status)
values
('11111111-1111-1111-1111-111111111111', 'Demo Facilities Manager', 'facilities@example.com', 'Northgate University', 'Client/Facilities Buyer', 'Interested in piloting site inspection, shift proof and client reporting.', 'seed', 'qualified'),
('11111111-1111-1111-1111-111111111111', 'Demo Operations Director', 'ops@example.com', 'FreshWorks Production Ltd', 'Cleaning/Hygiene Company', 'We need support migrating spreadsheet and WhatsApp-based hygiene operations into one system.', 'seed', 'new')
on conflict do nothing;

insert into public.clients (id, company_id, name, organisation_type, sector, primary_contact_name, primary_contact_email, status)
values
('22222222-2222-2222-2222-222222222221', '11111111-1111-1111-1111-111111111111', 'Northgate University', 'University', 'Education', 'Facilities Manager', 'facilities@example.com', 'prospect'),
('22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'FreshWorks Production Ltd', 'Production Factory', 'Food production', 'Operations Director', 'ops@example.com', 'active')
on conflict (id) do nothing;

insert into public.sites (id, company_id, client_id, name, address, city, postcode, site_type, status)
values
('33333333-3333-3333-3333-333333333331', '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222221', 'NU Library Block', 'Demo Campus Road', 'London', 'NW0 1AA', 'Education', 'pending'),
('33333333-3333-3333-3333-333333333332', '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', 'FreshWorks Line B', 'Demo Industrial Estate', 'London', 'E10 2BB', 'Food Production', 'active')
on conflict (id) do nothing;

insert into public.contracts (company_id, client_id, site_id, contract_reference, lpo_reference, scope, rates, vat_treatment, payment_terms, service_level, start_date, status)
values
('11111111-1111-1111-1111-111111111111','22222222-2222-2222-2222-222222222221','33333333-3333-3333-3333-333333333331','CON-NU-001','LPO-NU-001','Daily hygiene support, inspection and client report pilot','{"hourly_rate":18.50,"currency":"GBP"}','20% VAT','14 days','Pilot SLA', current_date, 'draft'),
('11111111-1111-1111-1111-111111111111','22222222-2222-2222-2222-222222222222','33333333-3333-3333-3333-333333333332','CON-FW-001','LPO-FW-001','Food production hygiene support, deep cleaning and audit evidence','{"fixed_monthly":4200,"currency":"GBP"}','20% VAT','30 days','Production SLA', current_date, 'active')
on conflict do nothing;

insert into public.alphaops_knowledge_base (title, category, public_answer, sensitivity_level, approved)
values
('What is HygieneOps?', 'product', 'HygieneOps is a modular facilities intelligence SaaS platform by AlphaBridge SmartOps Ltd for hygiene operations, compliance, site execution, proof of service, reporting and data migration.', 'public', true),
('What modules does HygieneOps include?', 'product', 'HygieneOps includes CRM intake, LPO/contract workspace, site inspection, workforce compliance, shift allocation, time and attendance, proof of presence, proof of service, SiteComms, reporting, onboarding and data migration workflows.', 'public', true),
('Can HygieneOps support data migration?', 'implementation', 'Yes. The recommended first phase supports CSV import for clients, sites, workers, contracts, compliance document indexes and shift history. API integrations can be considered for mature clients after field mapping and pilot validation.', 'public', true),
('What is the security position?', 'security', 'Public chat must not collect DBS, right-to-work, payroll, banking, password, identity or confidential contract records. Sensitive records should only be collected inside the authenticated platform with role-based access and Row-Level Security.', 'public', true);
