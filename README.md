# mb.Raumtrend

Original source recovered from Vercel production deployment `dpl_AojKxKyraU7LLwaGDbQiYm8qEyKj` (2026-09-22).

## Development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

## Deployment

Repository: `kiliansmd/mbraumtrend`
Vercel project: `v0-landing-page-design-e4`
Team: `sadjkfhdskafhjku`
Production branch: `main`
Production URL: https://www.mb-raumtrend.de
Root directory: repository root

Vercel Git integration builds pushes to `main`; other branches produce previews. `vercel.json` explicitly selects npm and the committed `package-lock.json` for reproducible installation. Do not commit `.env*` or `.vercel`.

## Content preservation

The first commit contains all 168 original source/assets files. Cosmetic and SEO changes are separate. Existing marketing, contact, legal, review and service texts are preserved. `lib/faqs.ts` is shared between the visible FAQ and JSON-LD to avoid divergent answers. Unsubstantiated technical-only schema fields were omitted, not replaced by guesses.

## Known existing limitations

`app/actions/send-lead-email.ts` simulates email delivery and logs lead data. The quick quote wizard opens WhatsApp; it does not prove message delivery. No new delivery integration was added in this cosmetic/SEO change. Booking confirmation and existing promises remain unchanged. Review accuracy and legal wording were not independently verified.
