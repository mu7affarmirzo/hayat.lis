import { Icon, Button } from '@/shared/ui'
import { useCreateTestModal } from '../../model/useCreateTestModal'
import { CreateTestModal } from '../CreateTestModal/CreateTestModal'

export type CreateTestProps = {}

export const CreateTest = () => {
  const { handleOpenEditModal, isEditModalOpen, handleCloseEditModal } =
    useCreateTestModal()

  return (
    <>
      <Button
        onClick={handleOpenEditModal}
        startIcon={<Icon type="file-contract" />}
        sx={{
          width: 'max-content',
          alignItems: 'center',
          textTransform: 'uppercase',
        }}
      >
        Добавить
      </Button>
      <CreateTestModal
        isOpen={isEditModalOpen}
        handleClose={handleCloseEditModal}
        handleSubmit={handleCloseEditModal}
      />
    </>
  )
}
