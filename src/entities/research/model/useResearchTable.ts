import { useCallback, useState } from 'react'
import { type IPatientsRoot } from '@/shared/types'
import { useValidateResearchMutation } from '../api/researchApi'
import { useResearchContainerModal } from './useResearchContainerModal'
import { useResearchMenuModal } from './useResearchMenuModal'

export type UseResearchTable = ReturnType<typeof useResearchTable>

interface ResearchTableProps {
  activeRow: number | undefined
  setActiveRow: React.Dispatch<React.SetStateAction<number | undefined>>
  data?: IPatientsRoot
  choice?: string
}

export const useResearchTable = (props: ResearchTableProps) => {
  const { activeRow, setActiveRow, data, choice } = props
  const {
    handleOpenMenuModal,
    openMenuModal: isOpenMenuModal,
    handleCloseMenuModal,
  } = useResearchMenuModal()

  const [validateResearch] = useValidateResearchMutation()
  const {
    handleCloseContainerModal,
    handleOpenContainerModal,
    isOpenContainerModal,
  } = useResearchContainerModal()

  const handleValidation = () => {
    if (!!selected && !!choice) {
      validateResearch({ id: selected, choice })
    }
  }

  const [selected, setSelected] = useState<number | undefined>()
  // const [selected, setSelected] = useState<readonly number[]>([])
  const [currentResearchId, setCurrentResearchId] = useState<
    number | undefined
  >()
  // const isSelected = useCallback(
  //   (id: number) => selected.includes(id),
  //   [selected]
  // )
  const isSelected = useCallback((id: number) => selected === id, [selected])

  // const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked && data) {
  //     const newSelected = data?.map((n) => n.lab)
  //     setSelected(newSelected)
  //     return
  //   }
  //   setSelected([])
  // }
  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {}

  // const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
  //   const selectedIndex = selected.indexOf(id)
  //   let newSelected: readonly number[] = []

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, id)
  //   } else if (selectedIndex =const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
  //     const selectedIndex = selected.indexOf(id)
  //     let newSelected: readonly number[] = []

  //     if (selectedIndex === -1) {
  //       newSelected = newSelected.concat(selected, id)
  //     } else if (selectedIndex === 0) {
  //       newSelected = newSelected.concat(selected.slice(1))
  //     } else if (selectedIndex === selected.length - 1) {
  //       newSelected = newSelected.concat(selected.slice(0, -1))
  //     } else if (selectedIndex > 0) {
  //       newSelected = newSelected.concat(
  //         selected.slice(0, selectedIndex),
  //         selected.slice(selectedIndex + 1)
  //       )
  //     }
  //     setSelected(newSelected)
  //   }== 0) {
  //     newSelected = newSelected.concat(selected.slice(1))
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1))
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     )
  //   }
  //   setSelected(newSelected)
  // }

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    if (id === selected) {
      setSelected(undefined)
    } else {
      setSelected(id)
    }
  }

  const handleClickRow = (id: number) => {
    if (id === activeRow) {
      setActiveRow(undefined)
      return
    }
    setActiveRow(id)
  }

  const handleDoubleClick = (id: number) => {
    setCurrentResearchId(id)
    handleOpenMenuModal()
  }

  return {
    numSelected: selected ? 1 : 0,
    rowCount: data?.results?.length ?? 0,
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
    isValidateBtnActive: !!selected,
    handleValidation,
  } as const
}
