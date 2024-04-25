import { IconButton, Stack } from '@mui/material'
import { QrCodeIcon, RefreshIcon } from '@/shared/assets'
import { useEditQRModal } from '../../model/useEditQRModal'
import { ConfirmEditQrModal } from '../ConfirmEditQrModal/ConfirmEditQrModal'
import { EditQRCodeModal } from '../EditQRCodeModal/EditQRCodeModal'

export type EditQRCodeProps = { containerId: number }

export const EditQRCode = (props: EditQRCodeProps) => {
  const {
    handleOpenEditModal,
    isEditModalOpen,
    handleCloseEditModal,
    handleCloseConfirmModal,
    handleOpenConfirmModal,
    isConfirmModalOpen,
  } = useEditQRModal()

  return (
    <>
      <Stack direction={'row'} spacing={'10px'}>
        <img src={QrCodeIcon} alt="QR Code icon" />
        <IconButton
          onClick={handleOpenEditModal}
          sx={{ p: 0, width: '16px', height: '16px' }}
        >
          <img src={RefreshIcon} alt="Refresh icon" />
        </IconButton>
      </Stack>
      <EditQRCodeModal
        containerId={props.containerId}
        isOpen={isEditModalOpen}
        handleClose={handleCloseEditModal}
        handleSubmit={handleOpenConfirmModal}
      />
      <ConfirmEditQrModal
        isOpen={isConfirmModalOpen}
        containerId={23}
        handleClose={handleCloseConfirmModal}
      />
    </>
  )
}
