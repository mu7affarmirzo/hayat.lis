import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { paramsToObject } from '@/shared/lib/paramsToObject'
import { type ResearchFilterParams } from '@/shared/types'
import { useFindUserMutation } from '../api/researchGroupApi'
import { useResearchGroups } from './useResearchGroups'

export const useResearchTab = () => {
  const [findUser, users] = useFindUserMutation()
  const [selectedUser, setSelectedUser] = useState({ name: '', id: 0 })
  const researchGroupProps = useResearchGroups()

  const defaultValues = async () => {
    const end = params.get('end') ?? ''
    const start = params.get('start') ?? ''
    const barcode = params.get('barcode') ?? ''
    const container = params.get('container') ?? ''
    const branch = params.get('branch') ?? ''
    const patient = params.get('patient') ?? ''

    if (patient && !Number.isNaN(patient)) {
      // await findUser({ id: Number(patient) })
    }

    return {
      end,
      start,
      barcode,
      container,
      branch,
    }
  }

  const mappedUsers = useMemo(
    () =>
      users.data?.map((i) => ({
        label: `${i.f_name}${i.mid_name ? ' ' + i.mid_name : ''}${i.l_name ? ' ' + i.l_name : ''}`,
        value: i.id,
      })),
    [JSON.stringify(users.data)]
  )

  const { register, control, handleSubmit } = useForm<ResearchFilterParams>({
    defaultValues,
  })

  const navigate = useNavigate()
  const location = useLocation()

  const [params, setParams] = useSearchParams()

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    selected?: { label: string; value: number }
  ) => {
    if (selected?.label && selected?.value) {
      setSelectedUser({ name: selected.label, id: selected.value })
    } else {
      setSelectedUser({ name: '', id: 0 })
    }
  }

  const handleChangeInput = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    if (value.length > 0) {
      findUser({ word: value })
    }
  }

  const handleClickSearch = async () => {
    if (selectedUser.name && selectedUser.id) {
      params.set('patient', `${selectedUser.id}`)
    }
  }

  const onSubmit = (data: ResearchFilterParams) => {
    const oldParams = paramsToObject(params.entries())
    const validData = validateObject({ ...oldParams, ...data })
    setParams(validData)
  }

  useEffect(() => {
    navigate(`${location.pathname}?${params.toString()}`)
  }, [location.pathname, params.toString()])

  return {
    register,
    control,
    handleSubmit,
    onSubmit,
    handleChange,
    handleChangeInput,
    users: mappedUsers ?? [],
    handleClickSearch,
    selectedUser,
    isLoadingUsers: users.isLoading,
    researchGroupProps,
  }
}
