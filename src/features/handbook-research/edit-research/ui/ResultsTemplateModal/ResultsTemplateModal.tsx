import { Stack } from '@mui/material'
import { Button as CustomBtn, CustomModal, Icon } from '@/shared/ui'
import { ResultsTemplate } from './ResultsTemplate'

interface ResultsTemplateModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const ResultsTemplateModal = (props: ResultsTemplateModalProps) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Шаблон результатов"
      onClose={handleClose}
      open={isOpen}
      maxWidth={'900px'}
    >
      <>
        <ResultsTemplate />
        <Stack
          direction="row"
          justifyContent={'flex-end'}
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
        </Stack>
      </>
    </CustomModal>
  )
}
