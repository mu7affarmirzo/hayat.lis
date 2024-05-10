import { useState } from 'react'

export const useAutocompleteTable = (initialId?: number) => {
  const [activeRow, setActiveRow] = useState<number | undefined>(initialId)

  const handleClickRow = (id: number) => {
    if (id === activeRow) {
      setActiveRow(undefined)
      return
    }
    setActiveRow(id)
  }

  return {
    activeRow,
    handleClickRow,
  }
}
