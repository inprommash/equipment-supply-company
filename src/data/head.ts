import { content, type Lang } from './content'

export function pageHead(lang: Lang) {
  const { title, description } = content[lang].meta
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: '/.netlify/images?url=/img/hero.png&w=1200&fm=jpg' },
      { property: 'og:locale', content: lang === 'uk' ? 'uk_UA' : 'en_US' },
    ],
    links: [
      { rel: 'alternate', hrefLang: 'uk', href: '/' },
      { rel: 'alternate', hrefLang: 'en', href: '/en' },
    ],
  }
}
