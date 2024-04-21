import { TextField as Input, Stack, type TextFieldProps } from '@mui/material'
import { colors } from '../colors'

type Props = TextFieldProps

export const TextInput = (props: Props) => {
  const { label, ...rest } = props
  return (
    <Stack spacing={'5px'}>
      {label && (
        <label htmlFor={rest.id} style={{ color: colors.regDarkText }}>
          {label}
        </label>
      )}
      <Input
        size="small"
        sx={{
          backgroundColor: 'white',
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
        }}
        {...rest}
      />
    </Stack>
  )
}
