import { useState } from 'react'

export const useEditQRModal = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [newCode, setNewCode] = useState('')

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
    console.log({ newCode })
    setIsConfirmModalOpen(false)
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
