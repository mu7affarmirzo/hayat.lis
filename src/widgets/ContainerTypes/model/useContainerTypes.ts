import { useState } from 'react'

export const useContainerTypes = () => {
  const [isEditing, setIsEditing] = useState(false)

  return {
    isEditing,
    setIsEditing,
  }
}
