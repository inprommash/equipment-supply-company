# ІНПРОММАШ / INPROMMASH — corporate website

Bilingual (Ukrainian / English) corporate website of **ТОВ «ІНПРОММАШ»**, a supplier of industrial equipment and spare parts for gas and oil production (Ukrgasvydobuvannya, Ukrnafta), Ukrainian seaports, machine-building and mining enterprises.

- `/` — Ukrainian version (default)
- `/en` — English version

The page covers: hero, about the company, five industry sectors, supply categories, advantages, the working process, and a supply-request (quote) form.

## Technologies

- TanStack Start + React 19, TypeScript
- Tailwind CSS 4
- Netlify Forms — supply requests (form name `request-quote`)
- Netlify Image CDN — responsive WebP delivery of photos in `public/img/`

## Run locally

```bash
pnpm install
netlify dev        # or: pnpm dev
pnpm test          # checks that UA and EN content stay in sync
```

Form submissions are processed only on Netlify deploys (not in a plain local preview).

## Editing content

All texts for both languages live in `src/data/content.ts`. Company phone / email / address are in the `contacts` object at the top of that file — empty values are hidden on the site.

## Possible next steps

- Fill in phone, email and legal address in `contacts`
- Add real project photos, certificates and partner logos
- Add a downloadable company profile (PDF) and requisites (ЄДРПОУ)
- Configure email notifications for new requests in Netlify (Forms → Notifications)
