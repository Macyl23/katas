export class BottleSong {
  getVerse(verse: number) {
    const numberOfBottlesMinusOne = verse - 1
    if (verse > 2) {
      return `${verse} bottles of beer on the wall, ${verse} bottles of beer.
Take one down and pass it around, ${numberOfBottlesMinusOne} bottles of beer on the wall.`
    } else if (verse == 2) {
      return `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, ${numberOfBottlesMinusOne} bottle of beer on the wall.`
    } else if (verse == 1) {
      return `${verse} bottle of beer on the wall, ${verse} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.`
    } else {
      return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
    }
  }
}
