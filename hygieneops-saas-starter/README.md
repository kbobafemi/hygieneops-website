# HygieneOps SaaS Starter

**HygieneOps by AlphaBridge SmartOps Ltd**  
Smart Hygiene Operations | Workforce Compliance | Site Quality Validation

This starter is a deployment-safe MVP pack for a professional SaaS-style product demo. It is deliberately built as a static frontend with a Supabase backend schema so it can be deployed on Cloudflare Pages without a build step.

## What is included

- Professional public landing page
- SaaS-style company dashboard/control room
- Onboarding model workflow
- Product modules for CRM, LPO/contracts, inspections, workforce compliance, scheduling, attendance, proof of service, SiteComms and reporting
- CSV import preview module for client transition/migration
- Formspree validation endpoint already configured
- Supabase-ready database schema with Row-Level Security policies
- Supabase Storage policies for documents and service evidence
- CSV migration templates
- Security/GDPR checklist
- Innovator Founder visa demo narrative

## Folder structure

```text
hygieneops-saas-starter/
├── index.html
├── _headers
├── robots.txt
├── assets/
│   ├── hygieneops-logo.svg
│   └── styles.css
├── src/
│   ├── app.js
│   ├── supabase-config.js
│   └── supabase-config.example.js
├── supabase/
│   ├── schema.sql
│   ├── storage-policies.sql
│   └── sample-data.sql
├── data-import/
│   ├── migration-playbook.md
│   └── templates/
└── docs/
    ├── README_DEPLOYMENT.md
    ├── SECURITY_AND_GDPR_CHECKLIST.md
    ├── INNOVATOR_FOUNDER_DEMO_NARRATIVE.md
    └── COMPANY_DASHBOARD_KPIS.md
```

## Important production rule

The public pilot form may collect basic enquiry information. Do not collect right-to-work documents, DBS documents, payroll data, ID documents, worker addresses or sensitive client contract documents through the public form. Those records should only be collected inside the authenticated Supabase-backed platform with Row-Level Security enabled.

## Quick deployment choice

For the lowest-risk first deployment, use **Cloudflare Pages Direct Upload** or connect this folder to a private GitHub repository using the **None** framework preset, no build command and output directory `.`.


## AlphaOps AI Upgrade

This version includes AlphaOps, the proposed AI assistant for HygieneOps. It adds a website chat section, AI governance dashboard panel, Supabase AI chat tables, an Edge Function template and social media inbox integration notes.

Read `docs/ALPHAOPS_AI_INTEGRATION_GUIDE.md` before enabling real AI responses or social media automation.
