// import { Button, Stack } from '@mui/material'
import {
  // Button as CustomBtn,
  CustomModal,
} from '@/shared/ui'
import { AdditionalFields } from './AdditionalFields'

interface AdditionalRequiredFieldsModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const AdditionalRequiredFieldsModal = (
  props: AdditionalRequiredFieldsModalProps
) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Дополнительные обязательные поля"
      onClose={handleClose}
      open={isOpen}
      // disablePortal
      maxWidth={'700px'}
    >
      <>
        <AdditionalFields />
        {/* <Stack
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
        </Stack> */}
      </>
    </CustomModal>
  )
}
