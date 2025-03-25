import { describe, expect, test } from 'vitest'
import { caesarCipher } from './causarCiper.service'

describe('Caesar Cipher', () => {
  test('given one letter, should return the letter plus the shift', () => {
    expect(caesarCipher('a', 1)).toBe('b')
  })
  test('another one, given one letter, should return the letter plus the shift', () => {
    expect(caesarCipher('b', 2)).toBe('d')
  })
  test('given a character should return the same character', () => {
    expect(caesarCipher('!', 2)).toBe('!')
  })
  test('given a an upper case letter should return upper case letter', () => {
    expect(caesarCipher('A', 1)).toBe('B')
  })
  test('given a number greater than alphabet letters', () => {
    expect(caesarCipher('A', 27)).toBe('B')
  })
  test('another one, given a number greater than alphabet letters', () => {
    expect(caesarCipher('C', 24)).toBe('A')
  })
  test('given a negative shift starting from A', () => {
    expect(caesarCipher('A', -1)).toBe('Z')
  })
  test('another one, starting from another letter with a negative shift', () => {
    expect(caesarCipher('C', -2)).toBe('A')
  })
  test('another one, given a negative shift that will make a tour', () => {
    expect(caesarCipher('C', -3)).toBe('Z')
  })

  test('given a sequence, with a letter and a character should return the ciphered text with character', () => {
    const sentence = 'I!'
    expect(caesarCipher(sentence, 1)).toBe('J!')
  })
})
