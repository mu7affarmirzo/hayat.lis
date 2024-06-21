import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'
import { usePagination } from '@/shared/model'
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
  const [params, setParams] = useSearchParams()

  const [validateResearch, validationStatus] = useValidateResearchMutation()
  const {
    handleCloseContainerModal,
    handleOpenContainerModal,
    isOpenContainerModal,
  } = useResearchContainerModal()

  const handleValidation = () => {
    if (!!selected && !!choice) {
      validateResearch({ id: selected, choice })
        .then(() => {
          toast.success('Успешно проверено', { position: 'top-right' })
        })
        .catch(() => {
          toast.error('Что-то пошло не так', { position: 'top-right' })
        })
    }
  }

  const changePage = (page: number) => {
    if (page === 0) {
      params.delete('page')
    } else {
      params.set('page', `${page}`)
    }
    setParams(params)
  }

  const paginationProps = usePagination({
    pageSize: 10,
    total: data?.count ?? 0,
    changePage,
  })

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
    isValidateBtnActive: !!selected && !!choice,
    handleValidation,
    paginationProps,
    isValidating: validationStatus.isLoading,
  } as const
}
