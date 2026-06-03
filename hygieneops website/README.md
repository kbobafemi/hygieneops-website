# HygieneOps Website — Cloudflare Ready Fixed Version

This folder has been professionally corrected for GitHub and Cloudflare Pages.

## Main fixes completed

1. Corrected file names to GitHub/Cloudflare-supported names:
   - `index.html`
   - `style.css`
   - `script.js`
   - `package.json`
   - `thank-you.html`
   - `validation-survey.html`

2. Replaced the previous SVG logo reference with the preferred PNG logo:
   - `assets/hygieneops-logo.png`
   - `assets/favicon.png`
   - `assets/social-preview.png`

3. Updated all website pages to use the PNG logo instead of an SVG file.

4. Kept Formspree connected:
   - `https://formspree.io/f/xeedynvg`

5. Added thank-you redirect support through:
   - `thank-you.html`

6. Kept the built-in validation survey page:
   - `validation-survey.html`

7. Kept all five social media links:
   - Facebook
   - LinkedIn
   - Instagram
   - X / Twitter
   - Threads

## Correct Cloudflare Pages settings

Use:

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `.`
- Root directory: `/`

Alternative:

- Build command: `exit 0`
- Build output directory: `.`

## Very important GitHub upload instruction

Upload the **contents** of this folder to the root of your GitHub repository. Do not upload the parent folder as a folder inside the repository.

Your repository root should look exactly like this:

```text
index.html
style.css
script.js
package.json
README.md
thank-you.html
validation-survey.html
HygieneOps_Validation_Survey_Tally_Copy_Paste_v2_with_contact.txt
assets/
  hygieneops-logo.png
  favicon.png
  social-preview.png
```

If your repository shows files like `index(2).html`, `style(2).css`, or `package(2).json`, rename them or delete them. Cloudflare must see `index.html` at the repository root.

## Test after deployment

After Cloudflare redeploys, test:

1. `https://hygieneops.co.uk`
2. Logo displays in the header and footer
3. Contact form submits
4. `https://hygieneops.co.uk/validation-survey.html`
5. Validation survey submits
6. `https://hygieneops.co.uk/thank-you.html`

If Cloudflare says the deployment is successful but the website does not update, check that the custom domain is attached to the correct Pages project and that the latest deployment is marked as Production.
