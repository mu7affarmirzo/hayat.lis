import { useState } from 'react'

export const useFilterResearch = () => {
  const [isOpenSamplingModal, setIsOpenSamplingModal] = useState(false)

  const handleOpenSamplingModal = () => {
    setIsOpenSamplingModal(true)
  }
  const handleCloseSamplingModal = () => {
    setIsOpenSamplingModal(false)
  }

  return {
    isOpenSamplingModal,
    handleCloseSamplingModal,
    handleOpenSamplingModal,
  }
}
