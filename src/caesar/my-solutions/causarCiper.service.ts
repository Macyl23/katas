const MINUS_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')
const UPPER_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export function caesarCipher(str: string, shift: number) {
  const sequence = str.split('')

  const cipher = sequence.map(character => {
    if (!MINUS_ALPHABET.includes(character.toLowerCase())) {
      return character
    }

    const cipheredLetter =
      character === character.toLowerCase()
        ? MINUS_ALPHABET[getIndexOfCiphered(MINUS_ALPHABET, character, shift)]
        : UPPER_ALPHABET[getIndexOfCiphered(UPPER_ALPHABET, character, shift)]
    return cipheredLetter
  })

  return cipher.join('')
}

function getIndexOfCiphered(alphabet: string[], letter: string, shift: number) {
  const originalShift = shift + alphabet.indexOf(letter)
  const exceedLimitOfAlphabet = originalShift > alphabet.length - 1

  const realShift =
    originalShift < 0
      ? alphabet.length + shift + alphabet.indexOf(letter)
      : exceedLimitOfAlphabet
      ? originalShift - alphabet.length
      : originalShift

  return realShift
}
