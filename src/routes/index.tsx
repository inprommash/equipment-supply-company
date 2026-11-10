import { createFileRoute } from '@tanstack/react-router'
import { SitePage } from '../components/SitePage'
import { pageHead } from '../data/head'

export const Route = createFileRoute('/')({
  head: () => pageHead('uk'),
  component: () => <SitePage lang="uk" />,
})
