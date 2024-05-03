import { useState } from 'react'

export const useResearchContainersTable = () => {
  const [activeRow, setActiveRow] = useState<number | undefined>()

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
