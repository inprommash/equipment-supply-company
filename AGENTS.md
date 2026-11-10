# AGENTS.md — INPROMMASH corporate site

Bilingual (uk/en) single-page corporate site for ТОВ «ІНПРОММАШ», an industrial equipment and spare-parts supplier. Built on TanStack Start (React 19) + Tailwind CSS 4, deployed on Netlify.

## Architecture

- `src/routes/index.tsx` → Ukrainian page (`/`), `src/routes/en.tsx` → English page (`/en`). Both render `SitePage` with a `lang` prop and set per-language `<head>` via `src/data/head.ts`.
- `src/routes/__root.tsx` — HTML shell; derives `<html lang>` from the pathname; loads Google Fonts (Unbounded for headings, Onest for body — both support Cyrillic).
- `src/data/content.ts` — **single source of all copy** for both languages (`content.uk`, `content.en`), plus `contacts`, `enquiryForm` config and the `img()` Image CDN helper. Both language objects must have identical shape — enforced by `src/data/content.test.ts`.
- `src/components/SitePage.tsx` — all page sections + header (with language switch and mobile menu) and footer.
- `src/components/QuoteForm.tsx` — supply-request form, AJAX POST (URL-encoded) to `/__forms.html`.
- `public/__forms.html` — static Netlify Forms registration for `request-quote`. Keep its field names identical to the fields QuoteForm submits (language, subject, company, name, phone, email, sector, message, bot-field).
- `public/img/` — AI-generated industrial photos (hero, gas, oil, port, machine, mining) and the company logos (`logo-ipm.jpg` wordmark, `ipm-mark.jpg` square mark used as favicon). Always reference via `img(file, width)` → `/.netlify/images?...&fm=webp`, never the raw PNGs.

## Conventions

- Brand colors are Tailwind theme tokens in `src/styles.css` (`navy-*`, `steel-*`, `amber-brand`). Reusable classes: `.eyebrow`, `.btn-primary`, `.btn-ghost`, `.form-label`, `.form-input`, `.blueprint`.
- Add new text to both languages at once. Contact values left empty are hidden.
- Customer names (Ukrgasvydobuvannya, Ukrnafta) are shown because the owner stated they are customers; do not add other client names without confirmation.
- Do not invent phone numbers, addresses, certifications or registry numbers — ask the owner.
