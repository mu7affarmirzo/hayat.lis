import {
  Stack,
  type ModalProps,
  Modal as MUIModal,
  Typography,
  IconButton,
} from '@mui/material'
import { Icon } from '../Icon/Icon'

type Props = {
  withCloseIcon?: boolean
  maxWidth?: string | number
} & ModalProps

export function CustomModal(props: Props) {
  const {
    withCloseIcon = true,
    title,
    onClose,
    maxWidth = '1440px',
    ...rest
  } = props
  return (
    <MUIModal {...rest}>
      <Stack
        spacing={'10px'}
        sx={{
          background: 'white',
          maxWidth,
          alignItems: 'center',
          borderRadius: '5px',
          p: '20px',
          justifyContent: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          position: 'absolute' as 'absolute',
        }}
      >
        {(!!title || withCloseIcon) && (
          <Stack
            direction="row"
            width={'100%'}
            justifyContent={title ? 'space-between' : 'flex-end'}
            alignItems={'center'}
          >
            {!!title && <Typography variant="h6">{title}</Typography>}
            {withCloseIcon && (
              <IconButton
                sx={{
                  p: '0',
                }}
                onClick={(e) => {
                  onClose && onClose(e, 'backdropClick')
                }}
                size="small"
              >
                <Icon type="close-circle" />
              </IconButton>
            )}
          </Stack>
        )}
        {props.children}
      </Stack>
    </MUIModal>
  )
}
