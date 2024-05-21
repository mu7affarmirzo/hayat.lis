import { Button, Stack } from '@mui/material'
import { CustomModal, BasicTabs } from '@/shared/ui'
import { DescriptionTab } from '../DescriptionTab/DescriptionTab'
import { MainSettingsTab } from '../MainSettingsTab/MainSettingsTab'

interface CreateModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const CreateTestModal = (props: CreateModalProps) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Тесты"
      onClose={handleClose}
      maxWidth={'1180px'}
      disablePortal
      open={isOpen}
    >
      <Stack spacing={'10px'} width={'100%'}>
        <BasicTabs
          panels={[
            { item: <MainSettingsTab />, label: 'Основные' },
            { item: <DescriptionTab />, label: 'Примечания' },
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
    </CustomModal>
  )
}