/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { useEditContainerMutation, researchGroupApi } from '../api/researchApi'

interface EditQRHookProps {
  id: number
  container_id: number
}

export const useEditQRModal = (props: EditQRHookProps) => {
  const { id, container_id: containerId } = props
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [newCode, setNewCode] = useState('')
  const [editContainerRequest] = useEditContainerMutation()
  const dispatch = useDispatch()
  const [params] = useSearchParams()

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false)
  }

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true)
  }

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false)
  }
  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(true)
  }

  function handleRefetch() {
    // has the same effect as `refetch` for the associated query
    dispatch(
      // @ts-expect-error
      researchGroupApi.endpoints.researchList.initiate(
        { searchQuery: '?' + params.toString() },
        { subscribe: false, forceRefetch: true }
      )
    )
  }

  const handleConfirm = () => {
    // api request
    // console.log({ newCode })
    setIsConfirmModalOpen(false)
    if (newCode.length > 0) {
      editContainerRequest({
        container_code: newCode,
        container_id: containerId,
        id,
      })
        .then(() => {
          handleRefetch()
        })
        .finally(() => {
          setNewCode('')
        })
    }
  }

  return {
    isEditModalOpen,
    isConfirmModalOpen,
    handleCloseEditModal,
    handleOpenEditModal,
    handleCloseConfirmModal,
    handleOpenConfirmModal,
    setNewCode,
    newCode,
    handleConfirm,
  }
}
