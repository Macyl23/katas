import { describe, expect, it } from 'vitest'
import { getVerse } from './99-bottles'

describe('99-bottles-song', () => {
  it('should return the same given vers', () => {
    const given = 'The verse to be returned'
    const actual = getVerse(given)
    expect(actual).toBe(given)
  })
})
