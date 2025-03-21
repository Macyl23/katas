import { describe, expect, it } from 'vitest'
import { orderListAlphabetically } from './order.service'

describe('Alphabetic Order', () => {
  it('should return a string given one string', () => {
    const inputList = ['a']
    const result = orderListAlphabetically(inputList)
    expect(result).toStrictEqual(['a'])
  })

  it('should return a sorted array given 2 elements', () => {
    const inputList = ['b', 'a']
    const result = orderListAlphabetically(inputList)
    expect(result).toStrictEqual(['a', 'b'])
  })

  it('should return a sorted array given multiple elements', () => {
    const inputList = ['javascript', 'java', 'python', 'lua']
    const result = orderListAlphabetically(inputList)
    expect(result).toStrictEqual(['java', 'javascript', 'lua', 'python'])
  })
})
