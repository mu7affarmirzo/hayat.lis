import { useEffect, useMemo, useState } from 'react'
// import { useSearchParams } from 'react-router-dom'

type PaginationProps = {
  pageSize: number
  total: number
  changePage: (page: number) => void
}

export const usePagination = (props: PaginationProps) => {
  const { pageSize, total, changePage } = props

  const totalPages = useMemo(() => {
    return Math.ceil(total / pageSize)
  }, [pageSize, total])

  const [currentPage, setCurrentPage] = useState(total ? 1 : 0)

  useEffect(() => {
    changePage(currentPage)
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(total ? 1 : 0)
  }, [total])

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleStart = () => {
    if (currentPage > 1) {
      setCurrentPage(1)
    }
  }

  const handleEnd = () => {
    setCurrentPage(totalPages)
  }

  return {
    handlePrev,
    handleNext,
    handleEnd,
    handleStart,
    current: currentPage,
    totalPages,
  }
}
