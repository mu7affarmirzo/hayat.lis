import { useState } from 'react'
import { useEditContainerMutation } from '../api/researchApi'

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

  const handleConfirm = () => {
    // api request
    // console.log({ newCode })
    setIsConfirmModalOpen(false)
    if (newCode.length > 0) {
      editContainerRequest({
        container_code: newCode,
        container_id: containerId,
        id,
      }).finally(() => {
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
