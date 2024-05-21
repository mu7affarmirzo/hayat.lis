import { useState } from 'react'

export const useResearchPacks = () => {
  const [isEditing, setIsEditing] = useState(false)

  return { isEditing, setIsEditing }
}
