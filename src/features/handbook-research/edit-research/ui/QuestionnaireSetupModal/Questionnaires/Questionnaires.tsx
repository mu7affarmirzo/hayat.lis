import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material'
import { TextInput } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

export const Questionnaires = () => {
  return (
    <Stack spacing={'10px'}>
      <TextInput
        sx={{ flex: 1 }}
        label="Наименование шаблона:"
        id="Наименование шаблона:"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
        }}
        labelStyle={{ textAlign: 'right' }}
      />
      <Stack spacing={'8px'} direction={'row'}>
        <Typography>Поля:</Typography>
        <Stack
          width={'100%'}
          height={'294px'}
          border={`1px solid ${colors.grayTableBorder}`}
        >
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                sx={{
                  width: '100%',
                  // pl: '5px',
                  background: colors.bgLightGray,
                  mx: 0,
                }}
                control={<Checkbox sx={{ py: '5px' }} />}
                label="№ пациента"
              />
              <FormControlLabel
                sx={{ width: '100%', mx: 0 }}
                control={<Checkbox sx={{ py: '5px' }} />}
                label="№ центра"
              />
            </FormGroup>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  )
}
