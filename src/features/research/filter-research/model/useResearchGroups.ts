import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { paramsToObject } from '@/shared/lib/paramsToObject'
import { useGroupListQuery } from '../api/researchGroupApi'

export const useResearchGroups = () => {
  const { data } = useGroupListQuery()
  const [params, setParams] = useSearchParams()
  const [categoryId, setCategoryId] = useState<number | undefined>(
    params.get('category') && !Number.isNaN(params.get('category'))
      ? Number(params.get('category'))
      : undefined
  )

  const [labId, setLabId] = useState<number | undefined>(
    params.get('lab') && !Number.isNaN(params.get('lab'))
      ? Number(params.get('lab'))
      : undefined
  )

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const oldParams = paramsToObject(params.entries())
    const validData = validateObject({
      ...oldParams,
      lab: labId,
      category: categoryId,
    })
    setParams(validData)
  }, [labId, categoryId, JSON.stringify(params.entries())])

  useEffect(() => {
    navigate(`${location.pathname}?${params.toString()}`)
  }, [location.pathname, params.toString()])

  return { researchGroup: data, categoryId, setCategoryId, labId, setLabId }
}
