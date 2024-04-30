import { useState } from 'react'

export const useResearchMenuModal = () => {
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
