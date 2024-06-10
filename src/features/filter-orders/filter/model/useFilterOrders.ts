import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { type ResearchFilterParams } from '@/shared/types'

export const useFilterOrders = () => {
  const [searchParams] = useSearchParams()

  const defaultValues = useCallback(() => {
    const end = searchParams.get('end') ?? ''
    const start = searchParams.get('start') ?? ''
    const barcode = searchParams.get('barcode') ?? ''
    const container = searchParams.get('container') ?? ''
    return {
      end,
      start,
      barcode,
      container,
    }
  }, [searchParams])

  const { register, handleSubmit, watch, control } =
    useForm<ResearchFilterParams>({
      mode: 'onChange',
      defaultValues: defaultValues(),
    })

  const navigate = useNavigate()
  const location = useLocation()

  const data = watch()

  useEffect(() => {
    const validData = validateObject(data)
    const searchParams = new URLSearchParams(validData)
    navigate(`${location.pathname}?${searchParams.toString()}`)
  }, [location.pathname, JSON.stringify(data)])

  const onSubmit = () => {}

  return { register, control, handleSubmit, onSubmit }
}
