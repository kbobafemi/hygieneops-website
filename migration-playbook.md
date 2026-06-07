# HygieneOps Supabase local project configuration.
# Link to your hosted Supabase project before deploying functions:
# supabase login
# supabase link --project-ref YOUR_PROJECT_REF
# supabase functions deploy alphaops-chat

project_id = "hygieneops-saas-mvp"

[functions.alphaops-chat]
verify_jwt = false
