import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useResearchListQuery } from '../api/researchListApi'

export const useResearchTabs = () => {
  const [activeRow, setActiveRow] = useState<number | undefined>()
  const location = useLocation()
  const { data: researchList } = useResearchListQuery({
    searchQuery: location.search,
  })
  useEffect(() => {
    setActiveRow(undefined)
  }, [researchList])

  return {
    activeRow,
    researchList,
    setActiveRow,
  }
}
