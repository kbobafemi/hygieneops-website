# HygieneOps Security and UK GDPR Checklist

This checklist is for preparing HygieneOps to handle client and workforce data responsibly.

## 1. Data classification

Classify data before collection.

| Data type | Example | Public form allowed? | Authenticated app only? |
|---|---|---:|---:|
| Basic enquiry | name, work email, organisation, service interest | Yes | Yes |
| Client operations | site address, access notes, service scope | No, except limited summary | Yes |
| Worker compliance | right-to-work status, DBS status, training records | No | Yes |
| Sensitive documents | ID, right-to-work documents, payroll files | No | Yes |
| Evidence files | site photos, task completion photos | No | Yes |
| Finance | invoice, pay rate, contract rate, VAT data | No | Yes |

## 2. Minimum collection principle

Only collect what is needed for the stated purpose. Public validation forms should collect only business contact and service interest information.

## 3. Technical controls

- Supabase Row-Level Security enabled on every tenant-owned table.
- Company-level tenant isolation using `company_id`.
- Storage objects stored under `<company_id>/<entity>/<record_id>/<filename>`.
- No service-role keys in frontend code.
- Admin MFA.
- Strong password policy.
- Audit logs for import, update, deletion and document access.
- Security headers through Cloudflare Pages `_headers` file.
- HTTPS only.
- File type and file size limits.

## 4. Organisational controls

- Privacy Notice.
- Data Processing Agreement for client customers.
- Internal access control policy.
- Retention schedule.
- Incident and breach response plan.
- Supplier/subprocessor register.
- Staff confidentiality commitments.
- Periodic access review.

## 5. Migration controls

- Obtain written client approval before importing historical data.
- Agree migration scope and retention rules.
- Use CSV templates for structured import.
- Preview and map fields before importing.
- Keep a migration audit log.
- Produce a migration completion report.
- Delete temporary import files after sign-off.

## 6. Practical launch rule

Use the free stack for validation, demos and non-sensitive pilot conversations. Move to paid Supabase and a formal compliance pack before accepting sensitive client/worker documents or production-level data.

