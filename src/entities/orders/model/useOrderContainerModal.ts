import { useState } from 'react'

export const useOrderContainerModal = () => {
  const [isOpenContainerModal, setIsOpenContainerModal] = useState(false)

  const handleCloseContainerModal = () => {
    setIsOpenContainerModal(false)
  }

  const handleOpenContainerModal = () => {
    setIsOpenContainerModal(true)
  }

  return {
    isOpenContainerModal,
    handleCloseContainerModal,
    handleOpenContainerModal,
  }
}
