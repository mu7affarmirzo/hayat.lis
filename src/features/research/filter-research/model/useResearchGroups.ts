import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { paramsToObject } from '@/shared/lib/paramsToObject'
import { useBranchListQuery, useGroupListQuery } from '../api/researchGroupApi'

export type GroupHookReturnType = ReturnType<typeof useResearchGroups>

export const useResearchGroups = () => {
  const { data, isLoading } = useGroupListQuery()
  const [params, setParams] = useSearchParams()
  const [categoryId, setCategoryId] = useState<number | undefined>(
    params.get('category') && !Number.isNaN(params.get('category'))
      ? Number(params.get('category'))
      : undefined
  )
  const [branchId, setBranchId] = useState<number | undefined>(
    params.get('branch') && !Number.isNaN(params.get('branch'))
      ? Number(params.get('branch'))
      : undefined
  )

  const [labId, setLabId] = useState<number | undefined>(
    params.get('lab') && !Number.isNaN(params.get('lab'))
      ? Number(params.get('lab'))
      : undefined
  )

  const { data: branchData, isLoading: isLoadingBranches } =
    useBranchListQuery()

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const oldParams = paramsToObject(params.entries())
    const validData = validateObject({
      ...oldParams,
      lab: labId,
      category: categoryId,
      branch: branchId,
    })
    setParams(validData)
  }, [labId, categoryId, branchId, JSON.stringify(params.entries())])

  useEffect(() => {
    navigate(`${location.pathname}?${params.toString()}`)
  }, [location.pathname, params.toString()])

  return {
    researchGroup: data,
    categoryId,
    setCategoryId,
    labId,
    setLabId,
    isLoadingData: isLoading,
    branchId,
    setBranchId,
    branchData,
    isLoadingBranches,
  }
}
