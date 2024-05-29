import { IconButton, Stack } from '@mui/material'
import { QrCodeIcon, RefreshIcon } from '@/shared/assets'
import { useEditQRModal } from '../../model/useEditQRModal'
import { ConfirmEditQrModal } from '../ConfirmEditQrModal/ConfirmEditQrModal'
import { EditQRCodeModal } from '../EditQRCodeModal/EditQRCodeModal'

export type EditQRCodeProps = { containerId: number; container_code: string }

export const EditQRCode = (props: EditQRCodeProps) => {
  const {
    handleOpenEditModal,
    isEditModalOpen,
    handleCloseEditModal,
    handleCloseConfirmModal,
    handleOpenConfirmModal,
    isConfirmModalOpen,
    newCode,
    setNewCode,
    handleConfirm,
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
        container_code={props.container_code}
        isOpen={isEditModalOpen}
        handleClose={handleCloseEditModal}
        setNewCode={setNewCode}
        newCode={newCode}
        handleSubmit={handleOpenConfirmModal}
      />
      <ConfirmEditQrModal
        isOpen={isConfirmModalOpen}
        containerId={23}
        handleSubmit={handleConfirm}
        handleClose={handleCloseConfirmModal}
      />
    </>
  )
}
