export function isValidDate(dateString: string) {
  const regEx = /^\d{4}-\d{2}-\d{2}$/
  return dateString.match(regEx) != null
}
