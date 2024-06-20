import { type SetStateAction, type Dispatch, useState } from 'react'
import { useChoicesQuery } from '../api/filterApi'

interface FilterHookProps {
  setChoice: Dispatch<SetStateAction<string>>
  choice: string
}

export const useFilterResearch = ({ setChoice, choice }: FilterHookProps) => {
  const [isOpenSamplingModal, setIsOpenSamplingModal] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice((event.target as HTMLInputElement).value)
  }

  const { data, isLoading } = useChoicesQuery()
  const handleOpenSamplingModal = () => {
    setIsOpenSamplingModal(true)
  }
  const handleCloseSamplingModal = () => {
    setIsOpenSamplingModal(false)
  }

  // console.log({ choice })

  return {
    isOpenSamplingModal,
    handleCloseSamplingModal,
    handleOpenSamplingModal,
    choices: data?.choices ?? [],
    isLoading,
    choice,
    handleChange,
  }
}
