import {
  type GridDirection,
  TextField as Input,
  Stack,
  type SxProps,
  type TextFieldProps,
} from '@mui/material'
import { colors } from '../colors'

type Props = TextFieldProps & {
  containerSx?: SxProps
  labelStyle?: React.CSSProperties
  spacing?: string
  direction?: GridDirection
}

export const TextInput = (props: Props) => {
  const {
    labelStyle,
    containerSx,
    sx,
    label,
    direction,
    spacing = '5px',
    ...rest
  } = props
  return (
    <Stack
      sx={{ width: '100%', ...containerSx }}
      direction={direction}
      spacing={spacing}
    >
      {label && (
        <label
          htmlFor={rest.id}
          style={labelStyle ?? { color: colors.regDarkText }}
        >
          {label}
        </label>
      )}
      <Input
        size="small"
        sx={{
          backgroundColor: 'white',
          textTransform: 'initial',
          '& .MuiOutlinedInput-input': {
            height: '20px',
            minHeight: '20px',
            justifyContent: 'center',
            padding: '5px 10px 5px 10px',
            alignItems: 'center',
            outline: 'none',
            fontSize: '14px',
          },
          '& .Mui-focused': {
            outline: 'none',
            border: 'none',
          },
          ...sx,
        }}
        {...rest}
      />
    </Stack>
  )
}
