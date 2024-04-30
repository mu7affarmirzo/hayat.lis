import { useState } from 'react'

export const useResearchContainerModal = () => {
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
