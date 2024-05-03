import { CustomModal } from '@/shared/ui'
import { RequiredFields } from './RequiredFields'

interface RequiredFieldsModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const RequiredFieldsModal = (props: RequiredFieldsModalProps) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Обязательные поля"
      onClose={handleClose}
      maxWidth={'500px'}
      open={isOpen}
    >
      <RequiredFields />
    </CustomModal>
  )
}
