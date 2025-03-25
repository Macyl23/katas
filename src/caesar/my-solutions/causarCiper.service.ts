export function caesarCipher(str: string, shift: number) {
  const MINUS_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const HIGH_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  if (!MINUS_ALPHABET.includes(str[0].toLowerCase())) {
    return str
  }

  const cipheredText =
    str[0] === str[0].toLowerCase()
      ? MINUS_ALPHABET.slice(MINUS_ALPHABET.indexOf(str[0]), shift + 1)
      : HIGH_ALPHABET.slice(HIGH_ALPHABET.indexOf(str[0]), shift + 1)

  return cipheredText[cipheredText.length - 1]
}
