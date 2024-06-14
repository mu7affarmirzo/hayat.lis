import { useCallback, useState } from 'react'
import { type IPatientWithPagination } from '@/shared/types'
import { useOrderContainerModal } from './useOrderContainerModal'
import { useOrderMenuModal } from './useOrderMenuModal'

export type UseOrdersTable = ReturnType<typeof useOrdersTable>

interface OrdersTableProps {
  activeRow: number | undefined
  setActiveRow: React.Dispatch<React.SetStateAction<number | undefined>>
  data?: IPatientWithPagination
}

export const useOrdersTable = (props: OrdersTableProps) => {
  const { activeRow, setActiveRow, data } = props
  const {
    handleOpenMenuModal,
    openMenuModal: isOpenMenuModal,
    handleCloseMenuModal,
  } = useOrderMenuModal()

  const {
    handleCloseContainerModal,
    handleOpenContainerModal,
    isOpenContainerModal,
  } = useOrderContainerModal()

  const [selected, setSelected] = useState<number | undefined>()
  // const [selected, setSelected] = useState<readonly number[]>([])
  const [currentOrdersId, setCurrentOrdersId] = useState<number | undefined>()
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

  console.log({ activeRow })

  const handleDoubleClick = (id: number) => {
    setCurrentOrdersId(id)
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
    currentOrdersId,
    openMenuModal: isOpenMenuModal,
    handleCloseMenuModal,
    handleCloseContainerModal,
    handleOpenContainerModal,
    isOpenContainerModal,
    ordersList: data,
    isValidateBtnActive: !!selected,
  } as const
}
