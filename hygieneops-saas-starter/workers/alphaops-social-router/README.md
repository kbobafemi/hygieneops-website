# AlphaOps Social Media Router

This folder documents the production approach for connecting AlphaOps to social media enquiries.

## Recommended phases

1. **Phase 1: Manual assisted social inbox**
   - Copy social enquiries into the HygieneOps dashboard.
   - AlphaOps drafts a suggested response.
   - A human approves before sending.

2. **Phase 2: Meta integration**
   - Create a Meta Developer App.
   - Connect Facebook Page and Instagram Professional account.
   - Configure Messenger Platform / Instagram Messaging API webhooks.
   - Store inbound DMs/comments in `social_inbox_items`.
   - AlphaOps drafts replies, but keep human approval enabled until quality is proven.

3. **Phase 3: X integration**
   - Apply for X API access and configure pay-per-use credits.
   - Route inbound messages or mentions into `social_inbox_items`.
   - Approve replies manually before sending.

4. **Phase 4: LinkedIn**
   - Start with manual assisted replies because LinkedIn API access is more restricted.
   - Move to API only when official access is approved.

## Safety rules

AlphaOps must not reveal private financial information, investor terms, trade secrets, private founder details, worker records, client contracts, passwords, API keys, service role keys, database credentials or security architecture. Any sensitive or legally important enquiry must be escalated to an authorised human.
