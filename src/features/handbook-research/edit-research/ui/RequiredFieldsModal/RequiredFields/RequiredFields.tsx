import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material'
import { colors } from '@/shared/ui/colors'

export const RequiredFields = () => {
  return (
    <FormControl sx={{ width: '100%' }} component="fieldset" variant="standard">
      <FormGroup
        sx={{
          border: `1px solid ${colors.grayTableBorder}`,
          maxHeight: '546px',
          overflowY: 'auto',
          flexWrap: 'nowrap',
        }}
      >
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="№ страхового полиса"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Адрес"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Вес"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Гражданство"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Группа крови"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Дата выдачи паспорта клиента"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Дата менструации"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Диагноз"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="ДМЦ"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Документ"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Загранпаспорт"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Имеет симптомы COVID"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="ИНН клиента"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Кем выдан паспорт клиента"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Количество лет менопаузы"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Кто делал забор БМ"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Место работы. должность"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Номер документа"
        />
        <FormControlLabel
          sx={{ width: '100%', mx: 0 }}
          control={<Checkbox sx={{ py: '5px' }} />}
          label="Номер паспорта клиента"
        />
      </FormGroup>
    </FormControl>
  )
}
