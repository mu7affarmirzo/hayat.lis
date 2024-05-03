import { Icon, Button } from '@/shared/ui'
import { useEditResearchModal } from '../../model/useEditResearchModal'
import { EditResearchModal } from '../EditResearchModal/EditResearchModal'

export type EditResearchProps = {}

export const EditResearch = () => {
  const { handleOpenEditModal, isEditModalOpen, handleCloseEditModal } =
    useEditResearchModal()

  return (
    <>
      <Button
        onClick={handleOpenEditModal}
        startIcon={<Icon type="pen" />}
        sx={{
          width: 'max-content',
          alignItems: 'center',
          textTransform: 'uppercase',
        }}
      >
        Изменить
      </Button>
      <EditResearchModal
        isOpen={isEditModalOpen}
        handleClose={handleCloseEditModal}
        handleSubmit={handleCloseEditModal}
      />
    </>
  )
}
