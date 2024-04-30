import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Button, Stack, Typography } from '@mui/material'
import { CustomModal } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

interface ConfirmModalProps {
  containerId?: number | string
  isOpen: boolean
  handleClose: () => void
}

export const ConfirmEditQrModal = (props: ConfirmModalProps) => {
  const { handleClose, isOpen, containerId } = props

  if (containerId === undefined) {
    return (
      <CustomModal onClose={handleClose} open={isOpen}>
        <p>Error</p>
      </CustomModal>
    )
  }
  return (
    <CustomModal onClose={handleClose} maxWidth={'450px'} open={isOpen}>
      <>
        <Stack width={'100%'} spacing={'10px'}>
          <Stack
            direction="row"
            spacing={'20px'}
            justifyContent={'center'}
            py={'30px'}
            alignItems={'center'}
          >
            <InfoOutlinedIcon />
            <Typography variant="subtitle1">
              Сохранить изменение штрих—кода?
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{ background: colors.bgLightGray }}
          direction="row"
          spacing={'16px'}
          justifyContent={'flex-end'}
          p={'20px 24px'}
          width="100%"
        >
          <Button onClick={handleClose} variant="contained" color="success">
            Да
          </Button>
          <Button onClick={handleClose} variant="contained" color="inherit">
            Нет
          </Button>
        </Stack>
      </>
    </CustomModal>
  )
}
