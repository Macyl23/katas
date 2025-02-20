import { beforeEach, describe, expect, it } from 'vitest'
import { ListService } from './list.service'

describe('List service foreach test', () => {
  let listService: ListService

  beforeEach(() => {
    listService = new ListService()
  })

  it('should return one number when list contains 1 element', () => {
    const listOfNumbers = [1]
    const actual = listService.computeForEach(listOfNumbers)
    expect(actual).toBe(1)
  })

  it('should return the total of 2 numbers', () => {
    const listOfNubmers = [1, 2]
    const actual = listService.computeForEach(listOfNubmers)
    expect(actual).toBe(3)
  })

  it('should return total 0 if there is no number', () => {
    const listOfNubmers: number[] = []
    const actual = listService.computeForEach(listOfNubmers)
    expect(actual).toBe(0)
  })
})
