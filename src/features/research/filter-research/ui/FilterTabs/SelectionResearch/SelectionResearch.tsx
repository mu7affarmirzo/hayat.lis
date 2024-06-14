import {
  Box,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  // Radio,
  // RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'
import { type UseFormRegister, type Control, Controller } from 'react-hook-form'
import { type ResearchFilterParams } from '@/shared/types'
import {
  DateInput,
  Icon,
  TextInput,
  Autocomplete,
  // AutocompleteX,
} from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
// import { AutocompleteTable } from './AutocompleteTable/AutocompleteTable'

type AutocompletePatient = { label: string; value: number }

interface SelectionResearchProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<ResearchFilterParams, any>
  register: UseFormRegister<ResearchFilterParams>
  handleChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: AutocompletePatient
  ) => void
  handleChangeInput: (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => void
  handleClickSearch: () => void
  users?: AutocompletePatient[]
  selectedUser: {
    name: string
    id: number
  }
  isLoadingUsers?: boolean
}
export const SelectionResearch = (props: SelectionResearchProps) => {
  const {
    control,
    handleChange,
    handleChangeInput,
    users,
    handleClickSearch,
    selectedUser,
    isLoadingUsers,
  } = props

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
                selected={field.value ? new Date(field.value) : null}
                maxDate={
                  control._getWatch('end')
                    ? new Date(`${control._getWatch('end')}`)
                    : null
                }
                onChange={(val) => {
                  if (val) {
                    field.onChange(dayjs(val).format('YYYY-MM-DD'))
                  } else {
                    field.onChange(null)
                  }
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
                isClearable
                className="w-[156px]"
                minDate={
                  control._getWatch('start')
                    ? new Date(`${control._getWatch('start')}`)
                    : null
                }
                {...field}
                selected={field.value ? new Date(field.value) : null}
                onChange={(val) => {
                  if (val) {
                    field.onChange(dayjs(val).format('YYYY-MM-DD'))
                  } else {
                    field.onChange(null)
                  }
                }}
              />
            )}
          />
        </Stack>
        {/* <Stack spacing={'5px'}>
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
        </Stack> */}
        <TextInput id="№ Заказа" label="№ Заказа" />
        <Stack
          width={'100%'}
          direction={'row'}
          gap={'8px'}
          alignItems={'flex-end'}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            value={selectedUser.name}
            onInputChange={(e, val) => handleChangeInput(e, val)}
            options={users ?? []}
            loading={isLoadingUsers}
            sx={{ flex: 1, background: colors.bgLightGray }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onChange={(e, val) => handleChange(e, val)}
            renderInput={(params) => (
              <TextInput
                {...params}
                id="ФИО"
                label="ФИО"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {isLoadingUsers ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
          <button
            onClick={handleClickSearch}
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
            {/* <FormControlLabel
              sx={{ whiteSpace: 'nowrap' }}
              control={<Checkbox sx={{ p: '0 5px 0 0' }} />}
              label="По Заказу"
            /> */}
          </Stack>
        </Stack>
        <FormControlLabel
          sx={{ whiteSpace: 'nowrap' }}
          control={<Checkbox sx={{ p: '0 5px 0 0' }} />}
          label="Только с привязанными контейнерами"
        />
        {/* <Controller
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
        /> */}
        {/* <Stack spacing={'5px'}>
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
        </Stack> */}
        {/* <AutocompleteX item={AutocompleteTable} /> */}
      </Stack>
    </Stack>
  )
}
