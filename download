# AlphaOps AI Integration Guide

AlphaOps is the proposed AI support assistant for HygieneOps by AlphaBridge SmartOps Ltd. It is designed to answer approved public enquiries, qualify leads, support onboarding questions and prepare safe draft responses for social media enquiries.

## What has been added

- Public website AlphaOps chat section.
- Dashboard AlphaOps governance panel.
- Supabase database tables for AI knowledge, conversations, messages and social inbox items.
- Supabase Edge Function template: `supabase/functions/alphaops-chat/index.ts`.
- Social media integration route guide: `workers/alphaops-social-router/README.md`.
- Built-in public-chat safety rules and sensitive-topic refusal logic.

## Production security rule

Never place your OpenAI API key, Supabase service-role key, Meta token, X token, TikTok token or LinkedIn credentials inside frontend JavaScript. The frontend must call a backend function, and the backend function must call OpenAI or social media APIs.

## Required subscriptions / accounts

For a serious and authentic production version, you should budget for:

1. **OpenAI API account**
   - Needed for real AlphaOps AI responses.
   - GPT-4.1 mini is a practical starting model for cost-controlled professional support.

2. **Supabase Pro**
   - Recommended before handling real client records, compliance documents, chat logs and production storage.
   - Free is acceptable for demo and validation only.

3. **Cloudflare Pro or suitable production Cloudflare setup**
   - Recommended when hygieneops.co.uk becomes client-facing and starts receiving serious traffic.

4. **Meta Developer App**
   - Required for Facebook Page / Instagram Professional account messaging automation.
   - Expect permissions review before production use.

5. **X API access**
   - Required for automated X responses or message handling.
   - X currently uses a pay-per-use pricing model.

6. **TikTok channel**
   - Add the official HygieneOps TikTok handle: @hygieneops.co.uk.
   - Use human-approved draft replies first for TikTok comments and profile enquiries.
   - Move to TikTok Business/Developer integration only after app permissions, privacy wording and escalation controls are reviewed.

7. **LinkedIn API access**
   - LinkedIn automation is more restricted. Start with human-approved AI draft responses before pursuing API access.

## Setup steps

1. Create or open your Supabase project.
2. Run `supabase/schema.sql` and `supabase/sample-data.sql`.
3. Install Supabase CLI.
4. Deploy the Edge Function:

```bash
supabase functions deploy alphaops-chat
```

5. Add your OpenAI API key as a Supabase secret:

```bash
supabase secrets set OPENAI_API_KEY=your_openai_api_key
supabase secrets set ALPHAOPS_MODEL=gpt-4.1-mini
```

6. Edit `src/supabase-config.js`:

```js
export const CONFIG = {
  supabaseUrl: "https://YOUR_PROJECT_REF.supabase.co",
  supabaseAnonKey: "YOUR_SUPABASE_ANON_KEY",
  formspreeEndpoint: "https://formspree.io/f/xeedynvg",
  platformName: "HygieneOps",
  companyName: "AlphaBridge SmartOps Ltd",
  publicSite: "https://hygieneops.co.uk",
  supportEmail: "info@hygieneops.co.uk",
  alphaOpsFunctionName: "alphaops-chat",
  alphaOpsDemoMode: false
};
```

7. Test the website chat.
8. Review conversation logs before enabling any automatic social media replies, especially TikTok public comment replies where brand risk is higher.

## Human approval recommendation

For the first 60 to 90 days, AlphaOps should draft replies rather than automatically send all replies. This protects the brand, reduces compliance risk and gives management a chance to improve the knowledge base.

## Investor Founder visa positioning

AlphaOps strengthens the HygieneOps innovation narrative because it demonstrates:

- AI-enabled customer support.
- Data migration and onboarding intelligence.
- Scalable SaaS implementation.
- Multi-channel customer service design.
- Responsible AI governance.
- Security-first handling of sensitive workforce and client information.
