import { describe, expect, test } from 'vitest'
import { caesarCipher } from './causarCiper.service'

describe('Caesar Cipher', () => {
  test('given one letter, should return the letter plus the shift', () => {
    expect(caesarCipher('a', 1)).toBe('b')
  })
  test('another one, given one letter, should return the letter plus the shift', () => {
    expect(caesarCipher('a', 2)).toBe('c')
  })
})
