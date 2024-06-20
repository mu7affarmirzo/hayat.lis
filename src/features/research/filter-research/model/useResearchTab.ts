import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { validateObject } from '@/shared/lib'
import { paramsToObject } from '@/shared/lib/paramsToObject'
import { type ResearchFilterParams } from '@/shared/types'
import {
  useFindUserMutation,
  useGetUserByIdQuery,
} from '../api/researchGroupApi'
import { useResearchGroups } from './useResearchGroups'

export const useResearchTab = () => {
  const [findUser, users] = useFindUserMutation()
  const [selectedUser, setSelectedUser] = useState({ name: '', id: 0 })
  const researchGroupProps = useResearchGroups()
  const [params, setParams] = useSearchParams()
  const patient = params.get('patient') ?? ''
  const { refetch: getUserById } = useGetUserByIdQuery(
    {
      id: patient.toString(),
    },
    { skip: !patient.toString() }
  )

  const defaultValues = async () => {
    const end = params.get('end') ?? ''
    const start = params.get('start') ?? ''
    const barcode = params.get('barcode') ?? ''
    const container = params.get('container') ?? ''
    const branch = params.get('branch') ?? ''
    const patient = params.get('patient') ?? ''
    const containerConnected =
      params.get('container_connected') === 'true' ? true : undefined
    console.log({ containerConnected })

    if (patient && !Number.isNaN(patient)) {
      // console.log({ patient, is: !Number.isNaN(patient) })
      await getUserById().then((res) => {
        const user = res.data
        // console.log({ res })
        if (user) {
          setSelectedUser({
            name: `${user.f_name}${user.mid_name ? ' ' + user.mid_name : ''}${user.l_name ? ' ' + user.l_name : ''}`,
            id: user.id,
          })
        }
      })
    }

    return {
      end,
      start,
      barcode,
      container,
      branch,
      container_connected: containerConnected,
    }
  }

  // console.log({ selectedUser })

  const mappedUsers = useMemo(
    () =>
      users.data?.map((i) => ({
        label: `${i.f_name}${i.mid_name ? ' ' + i.mid_name : ''}${i.l_name ? ' ' + i.l_name : ''}`,
        value: i.id,
      })),
    [JSON.stringify(users.data)]
  )

  const { register, control, handleSubmit, watch } =
    useForm<ResearchFilterParams>({
      defaultValues,
    })

  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    selected?: { label: string; value: number }
  ) => {
    if (selected?.label && selected?.value) {
      setSelectedUser({ name: selected.label, id: selected.value })
    } else {
      setSelectedUser({ name: '', id: 0 })
      params.delete('patient')
    }
  }

  const handleChangeInput = async (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    if (value.length > 0) {
      await findUser({ word: value })
    }
  }

  const handleClickSearch = () => {
    if (selectedUser.name && selectedUser.id) {
      params.set('patient', `${selectedUser.id}`)
    }
  }

  const handleClearSearch = () => {
    params.delete('patient')
    setSelectedUser({ name: '', id: 0 })
  }

  const onSubmit = (data: ResearchFilterParams) => {
    const oldParams = paramsToObject(params.entries())
    let validData = validateObject({ ...oldParams, ...data })

    if (selectedUser.id) {
      validData = validateObject({
        ...oldParams,
        ...data,
        patient: selectedUser.id,
      })
    }

    if (data.lab && !Number.isNaN(data.lab)) {
      researchGroupProps.setLabId(Number(data.lab))
    }

    setParams(validData)
  }

  const isContainerChecked = useMemo(() => {
    return watch('container_connected')
  }, [watch('container_connected')])

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
    handleClearSearch,
    isContainerChecked,
  }
}
