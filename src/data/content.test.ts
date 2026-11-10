import { describe, expect, it } from 'vitest'
import { content } from './content'

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === 'object')
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, shape(v)]))
  return typeof value
}

describe('bilingual content', () => {
  it('has the same structure in Ukrainian and English', () => {
    expect(shape(content.en)).toEqual(shape(content.uk))
  })

  it('uses the same sector ids and images in both languages', () => {
    const pick = (l: 'uk' | 'en') => content[l].sectors.map((s) => [s.id, s.image])
    expect(pick('en')).toEqual(pick('uk'))
  })

  it('has no empty strings', () => {
    const strings = JSON.stringify(content).match(/""/g)
    expect(strings).toBeNull()
  })
})
