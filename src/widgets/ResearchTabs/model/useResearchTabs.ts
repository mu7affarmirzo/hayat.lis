import { useEffect, useState } from 'react'
import {
  // useLocation,
  useSearchParams,
} from 'react-router-dom'
import { useResearchListQuery } from '../api/researchListApi'

export const useResearchTabs = () => {
  const [activeRow, setActiveRow] = useState<number | undefined>()
  const [choice, setChoice] = useState('')
  const [params] = useSearchParams()
  // const location = useLocation()

  const { data: researchList, isLoading: isLoadingData } = useResearchListQuery(
    {
      searchQuery: '?' + params.toString(),
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
