import { useState } from 'react'

export const useAntibiotics = () => {
  const [isEditing, setIsEditing] = useState(false)

  return {
    isEditing,
    setIsEditing,
  }
}
