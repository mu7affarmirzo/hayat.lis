import {
  InputLabel,
  MenuItem,
  Select as SelectInput,
  Stack,
  type SelectProps,
} from '@mui/material'
import { colors } from '../colors'

type Props = SelectProps & {
  data: Array<{ value: string; label: string }>
}

export const Select = (props: Props) => {
  const { data, label, ...rest } = props
  return (
    <Stack spacing={'5px'}>
      {label && (
        <InputLabel sx={{ color: colors.regDarkText }} id={rest?.labelId}>
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
        }}
        {...rest}
      >
        {data.map((el) => {
          return (
            <MenuItem key={el.value} value={el.value}>
              {el.label}
            </MenuItem>
          )
        })}
      </SelectInput>
    </Stack>
  )
}
