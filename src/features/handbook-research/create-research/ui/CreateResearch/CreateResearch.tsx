import { Stack } from '@mui/material'
import { Icon, Button } from '@/shared/ui'
import { useCreateResearchModal } from '../../model/useCreateResearchModal'
import { CreateResearchModal } from '../CreateResearchModal/CreateResearchModal'

export type CreateResearchProps = {}

export const CreateResearch = () => {
  const { handleOpenEditModal, isEditModalOpen, handleCloseEditModal } =
    useCreateResearchModal()

  return (
    <>
      <Stack direction={'row'} spacing={'10px'}>
        <Button
          onClick={handleOpenEditModal}
          startIcon={<Icon type="file-contract" />}
          sx={{ width: 'max-content', alignItems: 'center' }}
        >
          ВАЛИДИРОВАННЫЕ
        </Button>
      </Stack>
      <CreateResearchModal
        isOpen={isEditModalOpen}
        handleClose={handleCloseEditModal}
        handleSubmit={handleCloseEditModal}
      />
    </>
  )
}
