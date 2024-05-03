import {
  Stack,
  type DialogProps,
  Dialog as MUIDialog,
  Typography,
  IconButton,
  DialogTitle,
} from '@mui/material'
import { Icon } from '../Icon/Icon'

type Props = {
  withCloseIcon?: boolean
  maxWidth?: string | number
} & DialogProps

export function CustomDialog(props: Props) {
  const {
    withCloseIcon = true,
    title,
    onClose,
    maxWidth = '1440px',
    ...rest
  } = props
  return (
    <MUIDialog {...rest}>
      <DialogTitle>Title</DialogTitle>
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
          overflow: 'auto',
          maxHeight: '100vh',
        }}
      >
        {(!!title || withCloseIcon) && (
          <Stack
            direction="row"
            width={'100%'}
            justifyContent={title ? 'space-between' : 'flex-end'}
            alignItems={'center'}
            // overflow={'auto'}
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
    </MUIDialog>
  )
}
