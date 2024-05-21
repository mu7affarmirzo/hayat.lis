import { useState } from 'react'

export const useUnitsOfMeasure = () => {
  const [isEditing, setIsEditing] = useState(false)
  return { isEditing, setIsEditing }
}
