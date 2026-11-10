import { Link, useRouterState } from '@tanstack/react-router'
import { content } from '../data/content'

export function NotFoundPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const lang = pathname.startsWith('/en') ? 'en' : 'uk'
  const t = content[lang].notFound
  return (
    <main className="blueprint grid min-h-screen place-items-center bg-navy-950 p-8 text-white">
      <div className="max-w-lg text-center">
        <p className="font-display text-7xl font-bold text-amber-brand">404</p>
        <h1 className="font-display mt-6 text-2xl font-bold">{t.title}</h1>
        <p className="mt-4 text-steel-200">{t.text}</p>
        <Link to={lang === 'en' ? '/en' : '/'} className="btn-primary mt-8">
          {t.back}
        </Link>
      </div>
    </main>
  )
}
