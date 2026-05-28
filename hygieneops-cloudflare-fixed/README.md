# HygieneOps Static Website

This is the corrected Cloudflare Pages-ready website folder.

## Files required at the repository root

- index.html
- style.css
- script.js
- package.json

## Cloudflare Pages settings

Use these settings for a static HTML/CSS/JS website:

- Framework preset: None
- Build command: npm run build
- Build output directory: .
- Root directory: /

If you do not want to use package.json, you can also use:

- Build command: exit 0
- Build output directory: .

Do not upload files as index.html.txt, style.css.txt, or script.js.txt.
The correct file names must be index.html, style.css, and script.js.
