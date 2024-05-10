import { Button, Stack } from '@mui/material'
import { Button as CustomBtn, CustomModal } from '@/shared/ui'
import { DeadlinesByRegion } from './DeadlinesByRegion'

interface DeadlinesByRegionModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const DeadlinesByRegionModal = (props: DeadlinesByRegionModalProps) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Сроки взятия материала по регионам"
      onClose={handleClose}
      open={isOpen}
      maxWidth={'700px'}
    >
      <>
        <DeadlinesByRegion />
        <Stack
          direction="row"
          justifyContent={'flex-end'}
          py={'8px'}
          spacing={'10px'}
          width={'100%'}
        >
          <Button
            // disabled
            color="success"
            variant="contained"
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Сохранить
          </Button>
          <CustomBtn
            onClick={handleClose}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Выход
          </CustomBtn>
        </Stack>
      </>
    </CustomModal>
  )
}
