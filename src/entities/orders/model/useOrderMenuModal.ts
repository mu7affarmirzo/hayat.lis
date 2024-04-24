import { useState } from 'react'

export const useOrderMenuModal = () => {
  const [openMenuModal, setOpenMenuModal] = useState(false)

  const handleCloseMenuModal = () => {
    setOpenMenuModal(false)
  }

  const handleOpenMenuModal = () => {
    setOpenMenuModal(true)
  }

  return {
    openMenuModal,
    handleCloseMenuModal,
    handleOpenMenuModal,
  }
}
