import {
  type GridDirection,
  Autocomplete as Input,
  Stack,
  type SxProps,
  type AutocompleteProps,
} from '@mui/material'
import { forwardRef } from 'react'
import { colors } from '../colors'

type Props<T> = AutocompleteProps<
  T,
  boolean | undefined,
  boolean | undefined,
  boolean | undefined
> & {
  containerSx?: SxProps
  labelStyle?: React.CSSProperties
  spacing?: string
  direction?: GridDirection
  label?: string
}

export const Autocomplete = forwardRef(function Autocomplete<T>(
  props: Props<T>,
  ref?: React.Ref<unknown>
) {
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
            padding: '0 !important',
          },
          '& .MuiOutlinedInput-root': {
            paddingY: 0,
            height: 30,
          },
          '& .Mui-focused': {
            outline: 'none',
            border: 'none',
          },
          ...sx,
        }}
        ref={ref}
        {...rest}
      />
    </Stack>
  )
})
