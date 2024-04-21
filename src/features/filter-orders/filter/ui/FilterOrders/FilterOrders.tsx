import { Stack, Typography, useTheme } from '@mui/material'
import { Select, DateInput, TextInput } from '@/shared/ui'

export const FilterOrders = () => {
  const theme = useTheme()
  return (
    <Stack
      sx={{ background: theme.status.bgLightGray }}
      maxWidth={'280px'}
      width="100%"
      spacing={'10px'}
      p={'10px'}
      height={'100%'}
    >
      <Stack spacing="5px">
        <label>Период</label>
        <Stack direction={'row'} spacing={'5px'}>
          <DateInput
            calendarClassName="left-[42px]"
            className="w-[123px]"
            onChange={() => {}}
          />
          <Typography>-</Typography>
          <DateInput className="w-[123px]" onChange={() => {}} />
        </Stack>
      </Stack>
      <Select
        labelId="112"
        label={'Пункт'}
        data={[
          { label: 'Центральный', value: 'central' },
          { label: 'HOSPITAL', value: 'hospital' },
          { label: 'HOSPITAL2', value: 'hospital2' },
          { label: 'HOSPITAL3', value: 'hospital3' },
        ]}
      />
      <TextInput
        label="Номер заказа"
        type="number"
        placeholder="0000"
        id={'order-number'}
      />
      <Stack spacing={'5px'}>
        <label htmlFor="input-day">Дата рождения</label>
        <Stack direction={'row'} spacing={'5px'}>
          <TextInput id={'input-day'} placeholder="DD" />
          <TextInput placeholder="MM" />
          <TextInput placeholder="YYYY" />
        </Stack>
      </Stack>
      <Select
        labelId="filter-orders"
        label={'Фильтр заказов'}
        data={[
          { label: 'Все заказы', value: 'all' },
          { label: 'Только готовые', value: 'ready' },
          { label: 'Только неготовые', value: 'not-ready' },
          { label: 'Готовые, но не распечатанные(COVID)', value: 'covidJLIJ' },
        ]}
      />
      <TextInput
        label="Баркод контейнера"
        type="number"
        placeholder="0000"
        id={'barcode-number'}
      />
    </Stack>
  )
}
