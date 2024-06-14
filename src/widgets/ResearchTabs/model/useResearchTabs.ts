import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useResearchListQuery } from '../api/researchListApi'

export const useResearchTabs = () => {
  const [activeRow, setActiveRow] = useState<number | undefined>()
  const [choice, setChoice] = useState('')

  const location = useLocation()
  const { data: researchList, isLoading: isLoadingData } = useResearchListQuery(
    {
      searchQuery: location.search,
    }
  )
  useEffect(() => {
    setActiveRow(undefined)
  }, [researchList])

  return {
    activeRow,
    researchList,
    setActiveRow,
    isLoadingData,
    choice,
    setChoice,
  }
}
