import { type GenericObject } from '../types'

export function paramsToObject(entries: IterableIterator<[string, string]>) {
  const result = {} as GenericObject
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tuple
    result[key] = value
  }
  return result
}
