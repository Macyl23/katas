export function getVerse(verse: number) {
  const numberOfBottlesMinusOne = verse - 1
  return `${verse} bottles of beer on the wall, ${verse} bottles of beer.
Take one down and pass it around, ${numberOfBottlesMinusOne} bottles of beer on the wall.`
}
