import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { type ResearchFilterParams } from '@/shared/types'

export const useResearchTab = () => {
  const { register, control, handleSubmit } = useForm<ResearchFilterParams>({
    // defaultValues: { start: '', end: '', container: '', lab: '' },
  })

  const navigate = useNavigate()
  const location = useLocation()

  const onSubmit = (data: ResearchFilterParams) => {
    const validData = validateObject(data)
    const searchParams = new URLSearchParams(validData)
    navigate(`${location.pathname}?${searchParams.toString()}`)
  }

  return { register, control, handleSubmit, onSubmit }
}
