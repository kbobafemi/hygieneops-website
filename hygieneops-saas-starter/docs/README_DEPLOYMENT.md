# HygieneOps Deployment Guide

This guide is designed for a first-time founder/developer and avoids unnecessary build tooling.

## 1. Deploy the frontend on Cloudflare Pages

### Option A: Direct Upload

1. Log in to Cloudflare.
2. Go to **Workers & Pages**.
3. Select **Pages**.
4. Choose **Upload assets** or **Direct Upload**.
5. Upload the full `hygieneops-saas-starter` folder.
6. Cloudflare will publish a temporary `*.pages.dev` URL.
7. Open the URL and test:
   - navigation links;
   - dashboard tabs;
   - CSV import preview;
   - pilot/contact form.

### Option B: GitHub connection

1. Create a private GitHub repository, for example `hygieneops-saas-starter`.
2. Upload all files in this folder.
3. In Cloudflare Pages, select **Connect to Git**.
4. Select the repository.
5. Use these settings:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `.`
6. Deploy.

## 2. Connect hygieneops.co.uk

1. In Cloudflare Pages, open the project.
2. Go to **Custom domains**.
3. Add `hygieneops.co.uk`.
4. Also add `www.hygieneops.co.uk` if required.
5. Make `hygieneops.co.uk` the main public product domain.
6. You may redirect `alphabridgesmartops.com` to the same site as the company domain.

## 3. Create the Supabase backend

1. Go to Supabase and create a new project.
2. Use a strong database password.
3. Open **SQL Editor**.
4. Run `supabase/schema.sql`.
5. Run `supabase/storage-policies.sql`.
6. Optional: run `supabase/sample-data.sql` for demonstration records.
7. Go to **Project Settings > API**.
8. Copy:
   - Project URL;
   - anon public key.
9. Open `src/supabase-config.js` and paste those values.
10. Redeploy the site.

## 4. Configure authentication before production use

Before storing client or worker documents:

1. Enable Supabase Auth email login.
2. Create the first admin user.
3. Add that user into the `profiles` table.
4. Link the user to the HygieneOps company record.
5. Confirm Row-Level Security is enabled.
6. Test that a user from one company cannot see another company’s data.

## 5. Production hardening checklist

Before real client onboarding:

- Use a paid Supabase project for non-pausing production reliability.
- Keep the GitHub repository private.
- Do not expose service-role keys in frontend code.
- Enable MFA for admin accounts.
- Create Privacy Notice, Cookie Notice, Terms, Data Processing Agreement and Data Retention Policy.
- Use separate buckets for worker compliance documents and service evidence.
- Document who is allowed to access DBS/right-to-work/payroll-related records.
- Create breach response procedures.
- Create client migration sign-off documents.

