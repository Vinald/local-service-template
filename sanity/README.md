# Sanity Studio (local-service-template)

Content editor for this template's Sanity project (`9vow8to2`, dataset `production`).

## First-time setup (run these yourself, from this folder)

```bash
npm install
npx sanity login      # opens your browser, log in with the Google account tied to Sanity
npx sanity deploy      # pick a studio hostname, e.g. local-service-template -> local-service-template.sanity.studio
```

After that, your content is editable at the `*.sanity.studio` URL `sanity deploy` gives you.

## Local development

```bash
npm run dev
# -> http://localhost:3333
```
