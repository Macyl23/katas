import { describe, expect, it } from 'vitest'
import { getVerse } from './99-bottles'

describe('99-bottles-song', () => {
  it('should return the same given verse', () => {
    const expected = `99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.`

    const actual = getVerse(99)
    expect(actual).toBe(expected)
  })

  //   it('should return the verse for 2 bottles', () => {
  //     const expected = `1 bottle of beer on the wall, 1 bottle of beer.
  // Take it down and pass it around, no more bottles of beer on the wall.`

  //     const actual = getVerse(2)
  //     expect(actual).toBe(expected)
  //   })
})
