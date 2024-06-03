import {
  Box,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { type UseFormRegister, type Control, Controller } from 'react-hook-form'
import { type ResearchFilterParams } from '@/features/research/filter-research/model/types'
import { DateInput, Icon, TextInput, Autocomplete } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { AutocompleteTable } from './AutocompleteTable/AutocompleteTable'

interface SelectionResearchProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<ResearchFilterParams, any>
  register: UseFormRegister<ResearchFilterParams>
}

export const SelectionResearch = (props: SelectionResearchProps) => {
  const { control } = props
  return (
    <Stack
      width="100%"
      border={`1px solid ${colors.bgHoverGray}`}
      sx={{ background: colors.bgLightGray }}
    >
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid ${colors.darkGray}`}
      >
        <Typography>Выборка</Typography>
      </Box>
      <Stack p={'5px'} spacing={'10px'}>
        <Stack spacing={'5px'} direction={'row'} alignItems={'center'}>
          <Typography>С</Typography>
          <Controller
            name="start"
            control={control}
            render={({ field }) => (
              <DateInput
                className="w-[156px]"
                {...field}
                isClearable
                maxDate={
                  control._getWatch('end')
                    ? new Date(`${control._getWatch('end')}`)
                    : null
                }
                onChange={(val) => {
                  field.onChange(dayjs(val).format('YYYY-MM-DD'))
                }}
              />
            )}
          />
          <Typography>по</Typography>
          <Controller
            name="end"
            control={control}
            render={({ field }) => (
              <DateInput
                className="w-[156px]"
                minDate={
                  control._getWatch('start')
                    ? new Date(`${control._getWatch('start')}`)
                    : null
                }
                {...field}
                onChange={(val) => {
                  field.onChange(dayjs(val).format('YYYY-MM-DD'))
                }}
              />
            )}
          />
        </Stack>
        <Stack spacing={'5px'}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{ margin: 0 }}
          >
            <Stack spacing={'11px'} direction={'row'} mb={'5px'}>
              <FormControlLabel
                sx={{ width: '172px' }}
                control={<Radio sx={{ padding: '0 10px 0 0' }} />}
                value="Регистрация"
                label="Регистрация"
              />
              <FormControlLabel
                control={<Radio sx={{ padding: '0 10px 0 0' }} />}
                value="Постановка"
                label="Постановка"
              />
            </Stack>
            <FormControlLabel
              sx={{ m: 0 }}
              control={<Radio sx={{ padding: '0 10px 0 0' }} />}
              value="Принятие в лаб."
              label="Принятие в лаб."
            />
          </RadioGroup>
          <TextInput />
        </Stack>
        <TextInput id="№ Заказа" label="№ Заказа" />
        <Stack
          width={'100%'}
          direction={'row'}
          gap={'8px'}
          alignItems={'flex-end'}
        >
          <TextInput sx={{ flex: 1 }} id="ФИО" label="ФИО" />
          <button
            style={{
              height: 30,
              background: 'white',
              padding: '3px',
              border: `1px solid ${colors.borderGray}`,
              borderRadius: '5px',
            }}
          >
            <Icon type="search-normal" />
          </button>
          <button
            style={{
              height: 30,
              background: 'white',
              padding: '3px',
              border: `1px solid ${colors.borderGray}`,
              borderRadius: '5px',
            }}
          >
            <Icon type="xmark" />
          </button>
        </Stack>
        <Stack width={'100%'}>
          <label htmlFor="Контейнер">Контейнер</label>
          <Stack
            width={'100%'}
            spacing={'8px'}
            direction={'row'}
            alignItems={'center'}
          >
            <Controller
              name="container"
              control={control}
              render={({ field }) => (
                <TextInput {...field} sx={{ width: '100%' }} id="Контейнер" />
              )}
            />
            <FormControlLabel
              sx={{ whiteSpace: 'nowrap' }}
              control={<Checkbox sx={{ p: '0 5px 0 0' }} />}
              label="По Заказу"
            />
          </Stack>
        </Stack>
        <FormControlLabel
          sx={{ whiteSpace: 'nowrap' }}
          control={<Checkbox sx={{ p: '0 5px 0 0' }} />}
          label="Только с привязанными контейнерами"
        />
        <Controller
          name="lab"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              type={'number'}
              id="Лабораторный №"
              label="Лабораторный №"
            />
          )}
        />
        <Stack spacing={'5px'}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{ margin: 0 }}
          >
            <Stack spacing={'11px'} direction={'row'} mb={'5px'}>
              <FormControlLabel
                sx={{ width: '172px' }}
                control={<Radio sx={{ padding: '0 10px 0 0' }} />}
                value="Плательщик"
                label="Плательщик"
              />
              <FormControlLabel
                control={<Radio sx={{ padding: '0 10px 0 0' }} />}
                value="ЛПУ"
                label="ЛПУ"
              />
            </Stack>
          </RadioGroup>
        </Stack>
        <Autocomplete item={AutocompleteTable} />
      </Stack>
    </Stack>
  )
}