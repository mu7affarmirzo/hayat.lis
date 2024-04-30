import { Button, Stack } from '@mui/material'
import { CustomModal, Select, TextInput } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

interface CreateModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const CreateResearchModal = (props: CreateModalProps) => {
  const { handleClose, isOpen, handleSubmit } = props

  return (
    <CustomModal
      title="Изменение штрих-кода контейнера"
      onClose={handleClose}
      maxWidth={'500px'}
      open={isOpen}
    >
      <Stack width={'100%'} spacing={'10px'}>
        <TextInput
          label="Текущий штрих-код"
          id="curQrCode"
          disabled
          type="number"
          sx={{ background: colors.bgLightGray }}
        />
        <TextInput type="number" label="Новый штрих-код" id="newQrCode" />
        <Select
          labelId="Причина"
          label="Причина"
          data={[
            { value: 'Хилез', label: 'Хилез' },
            { value: 'Гемолиз', label: 'Гемолиз' },
            { value: 'Сгусток', label: 'Сгусток' },
            { value: 'Недостаток БМ', label: 'Недостаток БМ' },
            { value: 'Грязная посуда', label: 'Грязная посуда' },
            { value: 'Не доставлен БМ', label: 'Не доставлен БМ' },
          ]}
        />
        <Stack
          direction="row"
          spacing={'16px'}
          justifyContent={'flex-end'}
          py={'8px'}
        >
          <Button
            onClick={() => {
              handleClose()
              handleSubmit()
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
