import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { contacts, content, img, type Lang, type SectorId } from '../data/content'
import { QuoteForm } from './QuoteForm'

export function SitePage({ lang }: { lang: Lang }) {
  const t = content[lang]
  const [sector, setSector] = useState<SectorId | 'other' | ''>('')
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    ['#about', t.nav.about],
    ['#sectors', t.nav.sectors],
    ['#supply', t.nav.supply],
    ['#process', t.nav.process],
    ['#contact', t.nav.contact],
  ] as const

  return (
    <div id="top" className="min-h-screen">
      <Header lang={lang} navItems={navItems} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <img
          src={img('hero.png', 1920)}
          srcSet={`${img('hero.png', 960)} 960w, ${img('hero.png', 1600)} 1600w, ${img('hero.png', 2400)} 2400w`}
          sizes="100vw"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-36 sm:px-8 lg:pb-32 lg:pt-48">
          <p className="eyebrow mb-6">{t.hero.eyebrow}</p>
          <h1 className="font-display max-w-4xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            {t.hero.title}{' '}
            <span className="text-amber-brand">{t.hero.titleAccent}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-steel-200 sm:text-xl">
            {t.hero.lead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              {t.hero.primary} <span aria-hidden>→</span>
            </a>
            <a href="#sectors" className="btn-ghost">
              {t.hero.secondary}
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 bg-navy-950/70 backdrop-blur">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
            {t.stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-7 pr-4 ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-amber-brand sm:text-3xl">
                  {s.value}
                </dd>
                <dd className="mt-1 text-sm text-steel-200">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">{t.about.eyebrow}</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              {t.about.title}
            </h2>
            {t.about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="mt-6 text-lg leading-relaxed text-navy-800/80">
                {p}
              </p>
            ))}
          </div>
          <ul className="grid content-center gap-4">
            {t.about.points.map((point, i) => (
              <li
                key={point}
                className="flex items-center gap-5 rounded-lg border border-steel-200 bg-steel-100 p-5"
              >
                <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy-900 text-sm font-bold text-amber-brand">
                  0{i + 1}
                </span>
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="scroll-mt-20 bg-steel-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="eyebrow mb-5">{t.sectorsSection.eyebrow}</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              {t.sectorsSection.title}
            </h2>
            <p className="mt-5 text-lg text-navy-800/80">{t.sectorsSection.lead}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {t.sectors.map((s, i) => (
              <article
                key={s.id}
                className={`group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-steel-200 transition hover:-translate-y-1 hover:shadow-xl ${i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-navy-900">
                  <img
                    src={img(s.image, i < 2 ? 900 : 640)}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded bg-navy-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-brand backdrop-blur">
                    {s.client}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-navy-800/80">{s.description}</p>
                  <ul className="mt-5 grid gap-2 text-sm">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={() => setSector(s.id)}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-navy-700 hover:text-amber-brand-dark"
                  >
                    {t.sectorsSection.request} <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Supply */}
      <section id="supply" className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow mb-5">{t.supply.eyebrow}</p>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                {t.supply.title}
              </h2>
            </div>
            <p className="text-lg text-navy-800/80">{t.supply.lead}</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg bg-steel-200 ring-1 ring-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {t.supply.groups.map((g, i) => (
              <div key={g.title} className="group bg-white p-8 transition hover:bg-navy-900">
                <span className="font-display text-sm font-bold text-amber-brand-dark group-hover:text-amber-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold group-hover:text-white">
                  {g.title}
                </h3>
                <p className="mt-3 text-navy-800/80 group-hover:text-steel-200">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="blueprint bg-navy-900 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow mb-5">{t.advantages.eyebrow}</p>
          <h2 className="font-display max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            {t.advantages.title}
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.advantages.items.map((a) => (
              <div key={a.title} className="rounded-lg border border-white/10 bg-white/5 p-7">
                <span className="block h-1 w-10 bg-amber-brand" />
                <h3 className="font-display mt-6 text-lg font-bold">{a.title}</h3>
                <p className="mt-3 text-steel-200">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="eyebrow mb-5">{t.process.eyebrow}</p>
          <h2 className="font-display max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            {t.process.title}
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            {t.process.steps.map((step, i) => (
              <li key={step.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-amber-brand text-lg font-bold">
                    {i + 1}
                  </span>
                  {i < t.process.steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-steel-200 md:block" />
                  )}
                </div>
                <h3 className="font-display mt-6 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-navy-800/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-navy-950 py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5">{t.form.eyebrow}</p>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              {t.form.title}
            </h2>
            <p className="mt-5 text-lg text-steel-200">{t.form.lead}</p>
            <div className="mt-10 rounded-lg border border-white/10 p-7">
              <h3 className="font-display mb-5 font-bold">{t.form.contactsTitle}</h3>
              <dl className="grid gap-4 text-steel-200">
                {contacts.phone && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-steel-500">{t.form.phoneLabel}</dt>
                    <dd>
                      <a href={`tel:${contacts.phone.replace(/[^+\d]/g, '')}`} className="text-lg text-white hover:text-amber-brand">
                        {contacts.phone}
                      </a>
                    </dd>
                  </div>
                )}
                {contacts.email && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-steel-500">{t.form.emailLabel}</dt>
                    <dd>
                      <a href={`mailto:${contacts.email}`} className="text-lg text-white hover:text-amber-brand">
                        {contacts.email}
                      </a>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs uppercase tracking-wider text-steel-500">{t.form.addressLabel}</dt>
                  <dd className="text-lg text-white">
                    {t.legalName}, {contacts.address[lang]}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <QuoteForm lang={lang} sector={sector} onSectorChange={setSector} />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-navy-950 text-steel-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <span className="rounded bg-white px-2 py-1">
              <img src={img('logo-ipm.jpg', 160)} alt="IPM" className="h-6 w-auto" />
            </span>
            <span className="text-sm">{t.footer.tagline}</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} {t.legalName}. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  )
}

function LangSwitch({ lang, className = '' }: { lang: Lang; className?: string }) {
  return (
    <div className={`flex overflow-hidden rounded-md border border-white/20 text-xs font-semibold ${className}`}>
      {(['uk', 'en'] as const).map((l) => (
        <Link
          key={l}
          to={l === 'uk' ? '/' : '/en'}
          hrefLang={l}
          aria-current={l === lang ? 'true' : undefined}
          aria-label={l === lang ? undefined : content[lang].otherLangLabel}
          className={`px-3 py-2 transition ${l === lang ? 'bg-amber-brand text-navy-950' : 'text-white hover:bg-white/10'}`}
        >
          {content[l].langName}
        </Link>
      ))}
    </div>
  )
}

function Header({
  lang,
  navItems,
  menuOpen,
  setMenuOpen,
}: {
  lang: Lang
  navItems: readonly (readonly [string, string])[]
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
}) {
  const t = content[lang]
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/90 text-white backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={t.legalName}>
          <span className="rounded bg-white px-2 py-1.5">
            <img src={img('logo-ipm.jpg', 200)} alt="IPM" className="h-7 w-auto" />
          </span>
          <span className="font-display hidden text-sm font-bold leading-tight sm:block">
            {lang === 'uk' ? 'ІНПРОММАШ' : 'INPROMMASH'}
          </span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm lg:flex">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} className="text-steel-200 transition hover:text-amber-brand">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} />
          <a href="#contact" className="btn-primary hidden px-4! py-2.5! text-sm md:inline-flex">
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/20 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span aria-hidden className="text-lg">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-5 pb-6 pt-2 lg:hidden">
          {navItems.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/5 py-3 text-steel-200 hover:text-amber-brand"
            >
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-5 w-full">
            {t.nav.cta}
          </a>
        </nav>
      )}
    </header>
  )
}
