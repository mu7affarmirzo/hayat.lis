import { Button, Stack } from '@mui/material'
import { Button as CustomBtn, CustomModal } from '@/shared/ui'
import { ResearchAccessibility } from './ResearchAccessibility'

interface ResearchAccessibilityModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const ResearchAccessibilityModal = (
  props: ResearchAccessibilityModalProps
) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Доступность исследований"
      onClose={handleClose}
      open={isOpen}
      // disablePortal
      maxWidth={'700px'}
    >
      <>
        <ResearchAccessibility />
        <Stack
          direction="row"
          justifyContent={'flex-end'}
          py={'8px'}
          spacing={'8px'}
          width={'100%'}
        >
          <CustomBtn
            onClick={handleClose}
            variant="contained"
            sx={{
              textTransform: 'capitalize',
              boxShadow: 'none',
            }}
            color="inherit"
          >
            Выбрать все
          </CustomBtn>
          <CustomBtn
            onClick={handleClose}
            variant="contained"
            sx={{
              textTransform: 'capitalize',
              boxShadow: 'none',
            }}
            color="inherit"
          >
            Убрать все
          </CustomBtn>
          <Button
            onClick={() => {
              handleClose()
            }}
            variant="contained"
            color="success"
            sx={{ textTransform: 'capitalize' }}
          >
            Сохранить
          </Button>
        </Stack>
      </>
    </CustomModal>
  )
}
