import { Stack } from '@mui/material'
import { Button as CustomBtn, CustomModal, Icon } from '@/shared/ui'
import { ResearchPanels } from './ResearchPanels'

interface ResearchPanelsModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const ResearchPanelsModal = (props: ResearchPanelsModalProps) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Панели для исследования"
      onClose={handleClose}
      open={isOpen}
      maxWidth={'900px'}
    >
      <>
        <ResearchPanels />
        <Stack
          direction="row"
          justifyContent={'space-between'}
          py={'8px'}
          spacing={'10px'}
          width={'100%'}
        >
          <CustomBtn
            disabled
            startIcon={<Icon type="check" />}
            sx={{
              width: 'max-content',
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Сохранить
          </CustomBtn>
          <CustomBtn
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
