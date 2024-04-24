import CloseIcon from '@mui/icons-material/Close'
import { Button, IconButton, Modal, Stack, Typography } from '@mui/material'

interface ModalProps {
  currentOrderId?: number
  openMenuModal: boolean
  handleCloseMenuModal: () => void
  openContainer: () => void
  openOrderLogs: () => void
}

export const OrderMenuModal = (props: ModalProps) => {
  const {
    currentOrderId,
    openMenuModal: isOpenMenuModal,
    handleCloseMenuModal: handleClose,
    openContainer,
    openOrderLogs,
  } = props

  if (currentOrderId === undefined) {
    return (
      <Modal
        open={isOpenMenuModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p>Id not found</p>
      </Modal>
    )
  }

  return (
    <Modal
      open={isOpenMenuModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        spacing={'4px'}
        sx={{
          background: 'white',
          maxWidth: '300px',
          alignItems: 'center',
          borderRadius: '4px',
          p: '24px 20px 24px 20px',
          justifyContent: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          position: 'absolute' as 'absolute',
        }}
      >
        <IconButton
          sx={{ position: 'absolute' as 'absolute', right: '8px', top: '8px' }}
          onClick={handleClose}
          size="small"
        >
          <CloseIcon />
        </IconButton>
        {/* {currentOrderId} */}
        <Typography variant={'subtitle2'}>
          Открыть (Заказ №: {currentOrderId})
        </Typography>
        <Button
          onClick={() => {
            openContainer()
            handleClose()
          }}
        >
          Контейнеры
        </Button>
        <Button onClick={openOrderLogs}>Логи по заказу</Button>
      </Stack>
    </Modal>
  )
}
