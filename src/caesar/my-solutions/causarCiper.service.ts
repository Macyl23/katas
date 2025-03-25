export function caesarCipher(str: string, shift: number) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const cipheredText = alphabet.slice(str.indexOf(str[0]), shift + 1)
  return cipheredText[cipheredText.length - 1]
}
