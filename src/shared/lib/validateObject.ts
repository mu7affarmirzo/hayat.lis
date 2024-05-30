// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericObject = { [key: string]: any }

export const validateObject = (obj: GenericObject) => {
  return Object.keys(obj).reduce((acc: GenericObject, key) => {
    if (obj[key]) {
      acc[key] = obj[key]
    }
    return acc
  }, {})
}
