import { createFileRoute } from '@tanstack/react-router'
import { SitePage } from '../components/SitePage'
import { pageHead } from '../data/head'

export const Route = createFileRoute('/en')({
  head: () => pageHead('en'),
  component: () => <SitePage lang="en" />,
})
