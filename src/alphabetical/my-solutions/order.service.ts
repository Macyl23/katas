export function orderListAlphabetically(list: string[]): string[] {
  return list.sort((a, b) => a.localeCompare(b))
}
