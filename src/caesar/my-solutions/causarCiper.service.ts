export function caesarCipher(str: string, shift: number) {
  const MINUS_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const HIGH_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const realShift =
    shift > MINUS_ALPHABET.length - 1 ? shift - MINUS_ALPHABET.length + 1 : shift + 1

  if (!MINUS_ALPHABET.includes(str[0].toLowerCase())) {
    return str
  }

  const cipheredText =
    str[0] === str[0].toLowerCase()
      ? MINUS_ALPHABET.slice(MINUS_ALPHABET.indexOf(str[0]), realShift)
      : HIGH_ALPHABET.slice(HIGH_ALPHABET.indexOf(str[0]), realShift)

  return cipheredText[cipheredText.length - 1]
}
