import { Button, Stack } from '@mui/material'
import { CustomModal, BasicTabs } from '@/shared/ui'
import { DescriptionTab } from '../DescriptionTab'
import { MainSettingsTab } from '../MainSettingsTab'

interface EditModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const EditResearchModal = (props: EditModalProps) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Редактирование исследования"
      onClose={handleClose}
      maxWidth={'1900px'}
      disablePortal
      open={isOpen}
    >
      <>
        <Stack spacing={'10px'} width={'100%'}>
          <BasicTabs
            panels={[
              { item: <MainSettingsTab />, label: 'Основные параметры' },
              { item: <DescriptionTab />, label: 'Описание/Примечания' },
            ]}
          />
          <Stack
            direction="row"
            spacing={'8px'}
            justifyContent={'flex-end'}
            py={'8px'}
          >
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
      </>
    </CustomModal>
  )
}
