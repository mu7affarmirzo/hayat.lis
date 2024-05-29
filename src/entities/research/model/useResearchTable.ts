import { useState } from 'react'
import { type IPatientsRoot } from '@/shared/types'
import { useResearchContainerModal } from './useResearchContainerModal'
import { useResearchMenuModal } from './useResearchMenuModal'

export type UseResearchTable = ReturnType<typeof useResearchTable>

interface ResearchTableProps {
  activeRow: number | undefined
  setActiveRow: React.Dispatch<React.SetStateAction<number | undefined>>
  data?: IPatientsRoot
}

export const useResearchTable = (props: ResearchTableProps) => {
  const { activeRow, setActiveRow, data } = props
  const {
    handleOpenMenuModal,
    openMenuModal: isOpenMenuModal,
    handleCloseMenuModal,
  } = useResearchMenuModal()

  const {
    handleCloseContainerModal,
    handleOpenContainerModal,
    isOpenContainerModal,
  } = useResearchContainerModal()

  const [selected, setSelected] = useState<readonly number[]>([])
  const [currentResearchId, setCurrentResearchId] = useState<
    number | undefined
  >()
  const isSelected = (id: number) => selected.includes(id)

  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && data) {
      const newSelected = data?.map((n) => n.lab)
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

  console.log({ activeRow })

  const handleDoubleClick = (id: number) => {
    setCurrentResearchId(id)
    handleOpenMenuModal()
  }

  return {
    numSelected: selected.length,
    rowCount: data?.length ?? 0,
    onSelectAllClick,
    isSelected,
    handleClick,
    handleClickRow,
    activeRow,
    handleDoubleClick,
    currentResearchId,
    openMenuModal: isOpenMenuModal,
    handleCloseMenuModal,
    handleCloseContainerModal,
    handleOpenContainerModal,
    isOpenContainerModal,
    researchList: data,
  } as const
}
