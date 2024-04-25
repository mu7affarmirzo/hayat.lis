import { useState } from 'react'

export const useEditQRModal = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)

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

  return {
    isEditModalOpen,
    isConfirmModalOpen,
    handleCloseEditModal,
    handleOpenEditModal,
    handleCloseConfirmModal,
    handleOpenConfirmModal,
  }
}
