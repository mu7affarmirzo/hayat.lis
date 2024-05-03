import { Stack } from '@mui/material'
import { Button as CustomBtn, CustomModal, Icon } from '@/shared/ui'
import { Placements } from './Placements'

interface PlacementsModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const PlacementsModal = (props: PlacementsModalProps) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Размещения"
      onClose={handleClose}
      open={isOpen}
      maxWidth={'1080px'}
    >
      <>
        <Placements />
        <Stack
          direction="row"
          justifyContent={'space-between'}
          py={'8px'}
          spacing={'10px'}
          width={'100%'}
        >
          <CustomBtn
            startIcon={<Icon type="file-contract" />}
            sx={{
              flex: 1,
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Добавить
          </CustomBtn>
          <CustomBtn
            startIcon={<Icon type="minus" />}
            sx={{
              flex: 1,
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Удалить
          </CustomBtn>
          <CustomBtn
            startIcon={<Icon type="pen" />}
            sx={{
              flex: 1,
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Изменить
          </CustomBtn>
          <CustomBtn
            disabled
            startIcon={<Icon type="check" />}
            sx={{
              flex: 1,
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Сохранить
          </CustomBtn>
          <CustomBtn
            disabled
            startIcon={<Icon type="xmark" />}
            sx={{
              flex: 1,
              alignItems: 'center',
              textTransform: 'uppercase',
            }}
          >
            Отмена
          </CustomBtn>
        </Stack>
      </>
    </CustomModal>
  )
}
