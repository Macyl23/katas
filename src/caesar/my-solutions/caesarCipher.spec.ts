import { describe, expect, test } from 'vitest'
import { caesarCipher } from './causarCiper.service'

describe('Caesar Cipher', () => {
  test('given one letter, should return the letter plus the shift', () => {
    expect(caesarCipher('a', 1)).toBe('b')
  })
  test('another one, given one letter, should return the letter plus the shift', () => {
    expect(caesarCipher('a', 2)).toBe('c')
  })
  test('given a character should return the same text', () => {
    expect(caesarCipher('!', 2)).toBe('!')
  })
  test('given a an upper case letter should return upper case letter', () => {
    expect(caesarCipher('A', 1)).toBe('B')
  })
  //   test('given a sequence, with a letter and a character should return the ciphered text with character', () => {
  //     const sentence = 'I!'
  //     expect(caesarCipher(sentence, 1)).toBe('J!')
  //   })
})
