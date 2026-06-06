-- HygieneOps Supabase Storage buckets and RLS policies
-- File path convention: <company_id>/<entity>/<record_id>/<filename>
-- Example: 8c9.../worker-documents/worker-uuid/right-to-work.pdf

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('hygieneops-documents', 'hygieneops-documents', false, 10485760, array['application/pdf','image/png','image/jpeg','image/webp','text/csv','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']),
  ('hygieneops-evidence', 'hygieneops-evidence', false, 10485760, array['image/png','image/jpeg','image/webp','application/pdf'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists hygieneops_storage_select on storage.objects;
create policy hygieneops_storage_select on storage.objects
for select to authenticated
using (
  bucket_id in ('hygieneops-documents','hygieneops-evidence')
  and ((storage.foldername(name))[1])::uuid = public.current_company_id()
);

drop policy if exists hygieneops_storage_insert on storage.objects;
create policy hygieneops_storage_insert on storage.objects
for insert to authenticated
with check (
  bucket_id in ('hygieneops-documents','hygieneops-evidence')
  and ((storage.foldername(name))[1])::uuid = public.current_company_id()
);

drop policy if exists hygieneops_storage_update on storage.objects;
create policy hygieneops_storage_update on storage.objects
for update to authenticated
using (
  bucket_id in ('hygieneops-documents','hygieneops-evidence')
  and ((storage.foldername(name))[1])::uuid = public.current_company_id()
)
with check (
  bucket_id in ('hygieneops-documents','hygieneops-evidence')
  and ((storage.foldername(name))[1])::uuid = public.current_company_id()
);

drop policy if exists hygieneops_storage_delete_admin on storage.objects;
create policy hygieneops_storage_delete_admin on storage.objects
for delete to authenticated
using (
  bucket_id in ('hygieneops-documents','hygieneops-evidence')
  and ((storage.foldername(name))[1])::uuid = public.current_company_id()
  and public.has_role(array['company_admin','ops_manager','super_admin'])
);
