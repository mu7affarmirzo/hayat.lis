import { Checkbox, FormControlLabel, FormGroup, Stack } from '@mui/material'
import { Select } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

export const Accreditation = () => {
  return (
    <Stack
      borderRadius={'4px'}
      border={`1px solid ${colors.borderLightGray}`}
      spacing={'5px'}
      p={'10px'}
      flex={1}
    >
      <FormGroup>
        <FormControlLabel
          sx={{
            '& .MuiTypography-root': {
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '32px',
            },
          }}
          control={<Checkbox defaultChecked />}
          label="Аккредитация"
        />
      </FormGroup>
      <Select
        disabled
        containerSx={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        }}
        labelSx={{
          width: 'max-content',
          whiteSpace: 'nowrap',
          marginRight: '15px !important',
          overflow: 'inherit',
        }}
        data={[]}
        sx={{ width: '100%' }}
        label="Дата аккредетации"
      />
    </Stack>
  )
}
