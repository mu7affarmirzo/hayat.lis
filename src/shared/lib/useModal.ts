import { useState } from 'react'

type useModalType = (initialMode?: boolean) => [boolean, () => void, () => void]

export const useModal: useModalType = (initialMode = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialMode)
  const show = () => setIsModalOpen(true)
  const hide = () => setIsModalOpen(false)

  return [isModalOpen, show, hide]
}
