import { beforeEach, describe, expect, it } from 'vitest'
import { BottleSong } from './99-bottles'

describe('99-bottles-song', () => {
  let song: BottleSong

  beforeEach(() => {
    song = new BottleSong()
  })

  it('should return the same given verse', () => {
    const expected = `99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.`

    const actual = song.getVerse(99)
    expect(actual).toBe(expected)
  })

  it('should return the verse for 2 bottles', () => {
    const expected = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.`

    const actual = song.getVerse(2)
    expect(actual).toBe(expected)
  })

  it('should return the verse for 1 bottle', () => {
    const expected = `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.`

    const actual = song.getVerse(1)
    expect(actual).toBe(expected)
  })

  it('should return the verse for 1 bottle', () => {
    const expected = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`

    const actual = song.getVerse(0)
    expect(actual).toBe(expected)
  })
})
