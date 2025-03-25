const MINUS_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')
const UPPER_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export function caesarCipher(str: string, shift: number) {
  if (!MINUS_ALPHABET.includes(str[0].toLowerCase())) {
    return str
  }

  const cipheredText =
    str[0] === str[0].toLowerCase()
      ? MINUS_ALPHABET[getIndexOfCiphered(MINUS_ALPHABET, str[0], shift)]
      : UPPER_ALPHABET[getIndexOfCiphered(UPPER_ALPHABET, str[0], shift)]

  return cipheredText
}

function getIndexOfCiphered(alphabet: string[], letter: string, shift: number) {
  const originalShift = shift + alphabet.indexOf(letter)
  const exceedLimitOfAlphabet = originalShift > alphabet.length - 1

  const realShift = exceedLimitOfAlphabet ? originalShift - alphabet.length : shift
  return realShift
}
