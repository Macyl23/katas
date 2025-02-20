export class ListService {
  computeForEach(list: number[]): number {
    let total = 0
    list.forEach(e => (total += e))
    return total
  }

  computeReducer(list: number[]): number {
    let initialValue = 0
    return list.reduce((accumalator, currentValue) => accumalator + currentValue, initialValue)
  }
}
