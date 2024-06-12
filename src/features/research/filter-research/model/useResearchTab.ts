import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { paramsToObject } from '@/shared/lib/paramsToObject'
import { type ResearchFilterParams } from '@/shared/types'

export const useResearchTab = () => {
  const { register, control, handleSubmit } = useForm<ResearchFilterParams>({
    // defaultValues: { start: '', end: '', container: '', lab: '' },
  })

  const navigate = useNavigate()
  const location = useLocation()

  const [params, setParams] = useSearchParams()

  const onSubmit = (data: ResearchFilterParams) => {
    const oldParams = paramsToObject(params.entries())
    const validData = validateObject({ ...oldParams, ...data })
    setParams(validData)
  }

  useEffect(() => {
    navigate(`${location.pathname}?${params.toString()}`)
  }, [location.pathname, params.toString()])

  return { register, control, handleSubmit, onSubmit }
}
