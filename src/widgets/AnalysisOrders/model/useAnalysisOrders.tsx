import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useResearchListQuery } from '../api/researchListApi'

export const useAnalysisOrders = () => {
  const [activeRow, setActiveRow] = useState<number | undefined>()
  const location = useLocation()
  const { data: researchList, isLoading: isLoadingResearchList } =
    useResearchListQuery({
      searchQuery: location.search,
    })

  useEffect(() => {
    setActiveRow(undefined)
  }, [researchList])

  return {
    activeRow,
    researchList,
    setActiveRow,
    isLoadingResearchList,
  }
}
