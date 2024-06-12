import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { paramsToObject } from '@/shared/lib/paramsToObject'
import { type ResearchFilterParams } from '@/shared/types'

export const useFilterOrders = () => {
  const location = useLocation()
  const [params, setParams] = useSearchParams()
  const defaultValues = async () => {
    const end = params.get('end') ?? ''
    const start = params.get('start') ?? ''
    const barcode = params.get('barcode') ?? ''
    const container = params.get('container') ?? ''

    return {
      end,
      start,
      barcode,
      container,
    }
  }

  const { register, handleSubmit, watch, control } =
    useForm<ResearchFilterParams>({
      mode: 'onChange',
      defaultValues,
    })

  const navigate = useNavigate()

  const data = watch()
  console.log({ data })
  useEffect(() => {
    const oldParams = paramsToObject(params.entries())
    const validData = validateObject({ ...oldParams, ...data })
    setParams(validData)
    // console.log({ validData })
    // const searchParams = new URLSearchParams(validData)
  }, [JSON.stringify(data), JSON.stringify(params.entries())])

  useEffect(() => {
    navigate(`${location.pathname}?${params.toString()}`)
  }, [location.pathname, params.toString()])
  // useEffect(() => {
  //   const validData = validateObject(data)
  //   const searchParams = new URLSearchParams(validData)
  //   navigate(`${location.pathname}?${searchParams.toString()}`)
  // }, [location.pathname, JSON.stringify(data)])

  // useEffect(() => {
  //   setSearchParams(data)
  // }, [JSON.stringify(data)])

  const onSubmit = () => {}

  return { register, control, handleSubmit, onSubmit }
}
