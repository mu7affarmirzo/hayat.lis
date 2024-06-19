import {
  InputLabel,
  MenuItem,
  Select as SelectInput,
  Stack,
  type SxProps,
  type SelectProps,
  CircularProgress,
} from '@mui/material'
import { colors } from '../colors'

type Props = SelectProps & {
  data: Array<{ value: string; label: string }>
  containerSx?: SxProps
  labelSx?: SxProps
  isLoading?: boolean
}

export const Select = (props: Props) => {
  const { containerSx, labelSx, sx, data, label, isLoading, ...rest } = props
  return (
    <Stack sx={containerSx} spacing={'5px'}>
      {label && (
        <InputLabel
          sx={{ color: colors.regDarkText, ...labelSx }}
          id={rest?.labelId}
        >
          {label}
        </InputLabel>
      )}
      <SelectInput
        size="small"
        sx={{
          backgroundColor: 'white',
          '& .MuiSelect-select': {
            height: '20px',
            minHeight: '20px',
            justifyContent: 'center',
            padding: '5px 0 5px 10px',
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
      >
        {isLoading ? (
          <Stack
            width={'100%'}
            height={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <CircularProgress size={20} />
          </Stack>
        ) : (
          data.map((el) => {
            return (
              <MenuItem key={el.value} value={el.value}>
                {el.label}
              </MenuItem>
            )
          })
        )}
      </SelectInput>
    </Stack>
  )
}
