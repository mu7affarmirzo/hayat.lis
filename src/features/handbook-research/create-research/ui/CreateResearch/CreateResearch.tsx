import { Icon, Button } from '@/shared/ui'
import { useCreateResearchModal } from '../../model/useCreateResearchModal'
import { CreateResearchModal } from '../CreateResearchModal/CreateResearchModal'

export type CreateResearchProps = {}

export const CreateResearch = () => {
  const { handleOpenEditModal, isEditModalOpen, handleCloseEditModal } =
    useCreateResearchModal()

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
      <CreateResearchModal
        isOpen={isEditModalOpen}
        handleClose={handleCloseEditModal}
        handleSubmit={handleCloseEditModal}
      />
    </>
  )
}
