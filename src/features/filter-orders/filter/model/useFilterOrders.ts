import { type SelectChangeEvent } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { paramsToObject } from '@/shared/lib/paramsToObject'
import { type ResearchFilterParams } from '@/shared/types'
import { useBranchListQuery } from '../api/ordersApi'

export const useFilterOrders = () => {
  const location = useLocation()
  const [params, setParams] = useSearchParams()

  const { data: branchList, refetch: refetchBranches } = useBranchListQuery()

  const [selectedBranch, setSelectedBranch] = useState('')

  const defaultValues = async () => {
    const end = params.get('end') ?? ''
    const start = params.get('start') ?? ''
    const barcode = params.get('barcode') ?? ''
    const container = params.get('container') ?? ''
    const branch = params.get('branch') ?? ''

    if (branch) {
      await refetchBranches().then((req) => {
        console.log({ req })
        const branchName = req.data?.find((b) => b.id === Number(branch))?.name
        if (branchName) {
          setSelectedBranch(branchName)
        }
      })
    }

    return {
      end,
      start,
      barcode,
      container,
      branch,
    }
  }

  const { register, handleSubmit, watch, control, setValue } =
    useForm<ResearchFilterParams>({
      mode: 'onChange',
      defaultValues,
    })

  const mappedBranches = useMemo(() => {
    return branchList?.map((b) => ({ label: b.name, value: b.name }))
  }, [branchList])

  const navigate = useNavigate()

  const data = watch()

  const handleChangeBranch = (e: SelectChangeEvent<unknown>) => {
    const value = e.target.value as string
    setSelectedBranch(value)
    const branch = branchList?.find((b) => b.name === value)

    if (branch?.id) {
      setValue('branch', `${branch.id}`)
    } else {
      setValue('branch', '')
    }
  }

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

  return {
    register,
    control,
    handleSubmit,
    onSubmit,
    branches: mappedBranches ?? [],
    handleChangeBranch,
    selectedBranch,
  }
}
