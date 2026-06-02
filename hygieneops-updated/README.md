# HygieneOps Website - Updated Folder

This folder is ready for GitHub and Cloudflare Pages.

## Included updates

- Adopted HygieneOps logo as an SVG file in `assets/hygieneops-logo.svg`.
- Added logo to the website header, footer and favicon.
- Added website enquiry form connected to Formspree.
- Added validation survey section and a built-in `validation-survey.html` form connected to Formspree.
- Added all five HygieneOps social media links:
  - Facebook
  - LinkedIn
  - Instagram
  - X / Twitter
  - Threads
- Added direct contact email and phone number.
- Removed the JavaScript that blocked form submission.
- Added `thank-you.html` page.
- Updated roadmap and backend explanation.

## Formspree endpoint already updated

The website enquiry form and built-in validation survey now use this Formspree endpoint:

```html
https://formspree.io/f/xeedynvg
```

The website now includes a built-in `validation-survey.html` page, so you can collect validation responses immediately through Formspree. You may still create a separate Google Form or Tally survey later and replace the survey button link in `index.html` if preferred.

## Formspree setup already completed in the code

Your current Formspree endpoint is `https://formspree.io/f/xeedynvg`. After uploading to GitHub and redeploying on Cloudflare, test both the contact form and the validation survey from the live website. Also confirm that your Formspree account receiving email is verified.

## How to create the validation survey

Use Google Forms or Tally and ask questions such as:

1. What type of organisation do you represent?
2. Do you currently manage cleaning or hygiene staff?
3. How do you currently communicate with deployed staff?
4. Do you use WhatsApp, email, spreadsheet or a software platform?
5. What is your biggest problem in managing cleaning operations?
6. Would a platform for staff compliance, site inspection, shift allocation and client communication be useful?
7. Which feature is most valuable to you?
8. Would your organisation pay for this kind of platform?
9. What monthly price range would be acceptable?
10. Would you be open to a short discovery call?

## Cloudflare Pages settings

Use either of these:

### Option 1

- Framework preset: None
- Build command: npm run build
- Build output directory: .
- Root directory: /

### Option 2

- Framework preset: None
- Build command: exit 0
- Build output directory: .
- Root directory: /

## Required files at repository root

- index.html
- style.css
- script.js
- thank-you.html
- package.json
- README.md
- assets/hygieneops-logo.svg

Do not rename files as `.txt`. The correct file names must be `index.html`, `style.css`, and `script.js`.


## Extra included file

- `HygieneOps_Validation_Survey_Tally_Copy_Paste_v2_with_contact.txt` contains the survey text you can copy into Tally or Google Forms if you later prefer an external survey link.
- `validation-survey.html` is already included for immediate use and posts directly to Formspree.
