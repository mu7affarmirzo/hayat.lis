import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { paramsToObject } from '@/shared/lib/paramsToObject'
import { type ResearchFilterParams } from '@/shared/types'
import { useBranchListQuery, useOrderChoicesQuery } from '../api/ordersApi'

export const useFilterOrders = () => {
  const location = useLocation()
  const [params, setParams] = useSearchParams()

  const {
    data: branchList,
    refetch: refetchBranches,
    isLoading: isBranchesLoading,
  } = useBranchListQuery()

  const {
    data: choicesList,
    refetch: refetchChoices,
    isLoading: isChoicesLoading,
  } = useOrderChoicesQuery()

  const [selectedBranch, setSelectedBranch] = useState('')
  const [selectedChoice, setSelectedChoice] = useState('')

  const defaultValues = async () => {
    const end = params.get('end') ?? ''
    const start = params.get('start') ?? ''
    const barcode = params.get('barcode') ?? ''
    const container = params.get('container') ?? ''
    const branch = params.get('branch') ?? ''
    const orderStatus = params.get('order_status') ?? ''

    if (branch) {
      await refetchBranches().then((req) => {
        const branchName = req.data?.find((b) => b.id === Number(branch))?.name
        console.log({ req, branch, branchName })
        if (branchName) {
          setSelectedBranch(branchName)
        }
      })
    }

    if (orderStatus) {
      await refetchChoices().then((req) => {
        const orderStatusName = req.data?.choices.find((b) => b === orderStatus)
        if (orderStatusName) {
          setSelectedChoice(orderStatusName)
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

  const mappedChoices = useMemo(() => {
    return choicesList?.choices.map((ch) => ({ label: ch, value: ch }))
  }, [choicesList])

  const navigate = useNavigate()

  const data = watch()

  const handleChangeBranch = (
    e: React.SyntheticEvent<Element, Event>,
    val: string
  ) => {
    const value = val
    setSelectedBranch(value)
    const branch = branchList?.find((b) => b.name === value)

    if (branch?.id) {
      setValue('branch', `${branch.id}`)
    } else {
      setValue('branch', '')
    }
  }

  const handleChangeChoice = (
    e: React.SyntheticEvent<Element, Event>,
    val: string
  ) => {
    const value = val
    setSelectedChoice(value)
    const orderChoice = choicesList?.choices.find((b) => b === value)

    if (orderChoice) {
      setValue('order_status', `${orderChoice}`)
    } else {
      setValue('order_status', '')
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
    isBranchesLoading,
    isChoicesLoading,
    selectedChoice,
    handleChangeChoice,
    choices: mappedChoices ?? [],
  }
}
