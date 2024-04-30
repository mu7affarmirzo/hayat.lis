import { useState } from 'react'

type Rows = Array<{
  id: number
  name: string
  date: string
  birthday: string
  labNumber: string
  gender: string
  orderNumber: string
  registrar: string
  director: string
  debt: string
  payer: string
  branch: string
}>

export const useResearchStatusTable = (rows: Rows) => {
  const [selected, setSelected] = useState<readonly number[]>([])
  const [activeRow, setActiveRow] = useState<number | undefined>()

  const isSelected = (id: number) => selected.includes(id)

  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: readonly number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const handleClickRow = (id: number) => {
    if (id === activeRow) {
      setActiveRow(undefined)
      return
    }
    setActiveRow(id)
  }

  return {
    numSelected: selected.length,
    rowCount: rows.length,
    onSelectAllClick,
    isSelected,
    handleClick,
    handleClickRow,
    activeRow,
  }
}
