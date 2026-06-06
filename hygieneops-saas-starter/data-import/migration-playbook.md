# HygieneOps Data Migration Playbook

This playbook gives prospective clients confidence that they can retain useful historical data when moving into HygieneOps.

## 1. Migration discovery

Ask the client:

- What system are you using now?
- Are your records in spreadsheets, WhatsApp, email, paper files, CRM, workforce system or accounting software?
- Which data must be migrated?
- Which data should be archived only?
- Which data should not be imported for privacy or quality reasons?
- Who will approve the final migration?

## 2. Data groups

Start with the safest and most useful records:

1. Clients.
2. Sites.
3. Workers/hygiene partners.
4. Contracts/LPOs.
5. Shift history.
6. Compliance document index.
7. Site inspection history.
8. Task templates.
9. Evidence files.
10. Finance/invoice history.

## 3. Supported migration methods

### Phase 1: CSV import

Best for MVP and early pilots.

- Client exports records from old system.
- HygieneOps maps columns to the HygieneOps data model.
- Client approves field mapping.
- Data is imported to staging/preview.
- Validation errors are corrected.
- Final import is signed off.

### Phase 2: API integration

Best for established clients with existing SaaS tools.

- Connect via authorised API key or OAuth.
- Pull clients, sites, workers and shifts.
- Maintain logs of synchronisation events.
- Use rate limits and least-privilege access.

### Phase 3: Enterprise migration

Best for larger organisations.

- Data Processing Agreement.
- Migration plan.
- Test import.
- User acceptance testing.
- Production import.
- Retention and deletion confirmation.

## 4. Field mapping example

| Legacy field | HygieneOps field | Required? |
|---|---|---:|
| Customer Name | clients.name | Yes |
| Site Address | sites.address | Yes |
| Cleaner Name | workers.full_name | Yes |
| Shift Date | shifts.start_time / shifts.end_time | Yes |
| Contract Ref | contracts.contract_reference | Optional |
| Job Photos | evidence_files.file_path | Optional |

## 5. Validation checks

Before import, check:

- duplicate clients;
- missing site names;
- invalid emails;
- incomplete shift times;
- expired compliance documents;
- records without a client/site relationship;
- documents without owner or expiry metadata.

## 6. Client sign-off

Every migration should produce:

- migration scope;
- field mapping record;
- number of records imported;
- rejected records;
- unresolved issues;
- confirmation of deletion of temporary files;
- client approval.

## 7. Templates included

Use the CSV templates in `data-import/templates/`:

- `clients_import_template.csv`
- `sites_import_template.csv`
- `workers_import_template.csv`
- `contracts_import_template.csv`
- `shifts_import_template.csv`
- `compliance_documents_index_template.csv`

