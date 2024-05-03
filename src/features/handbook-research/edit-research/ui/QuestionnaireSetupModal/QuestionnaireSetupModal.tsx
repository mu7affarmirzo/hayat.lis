import { Button, Stack } from '@mui/material'
import { CustomModal } from '@/shared/ui'
import { Questionnaires } from './Questionnaires'

interface QuestionnaireSetupModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const QuestionnaireSetupModal = (
  props: QuestionnaireSetupModalProps
) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Настройка анкеты"
      onClose={handleClose}
      maxWidth={'500px'}
      open={isOpen}
    >
      <Stack spacing={'10px'} width={'100%'}>
        <Questionnaires />
        <Stack
          direction="row"
          spacing={'8px'}
          justifyContent={'space-between'}
          py={'8px'}
        >
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              textTransform: 'capitalize',
              boxShadow: 'none',
            }}
            color="inherit"
          >
            Удалить все
          </Button>

          <Stack direction="row" spacing={'8px'}>
            <Button
              onClick={() => {
                handleClose()
              }}
              variant="contained"
              sx={{
                textTransform: 'capitalize',
                boxShadow: 'none',
              }}
              color="success"
            >
              Сохранить
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{
                textTransform: 'capitalize',
                boxShadow: 'none',
              }}
              color="inherit"
            >
              Отмена
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </CustomModal>
  )
}
