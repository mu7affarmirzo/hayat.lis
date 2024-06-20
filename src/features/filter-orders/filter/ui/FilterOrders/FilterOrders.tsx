/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { Controller } from 'react-hook-form'
import { Select, DateInput, TextInput } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { useFilterOrders } from '../../model/useFilterOrders'

export const FilterOrders = () => {
  const {
    handleSubmit,
    onSubmit,
    register,
    control,
    branches,
    handleChangeBranch,
    selectedBranch,
    isBranchesLoading,
    choices,
    isChoicesLoading,
    handleChangeChoice,
    selectedChoice,
  } = useFilterOrders()

  function isValidDate(dateString: string) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/
    return dateString.match(regEx) != null
  }

  return (
    <Stack
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ background: colors.bgLightGray }}
      maxWidth={'280px'}
      width="100%"
      spacing={'10px'}
      p={'10px'}
    >
      <Stack spacing={'5px'}>
        <label>Период</label>
        <Stack spacing={'5px'} direction={'row'} alignItems={'center'}>
          <Controller
            name="start"
            control={control}
            render={({ field }) => (
              <DateInput
                calendarClassName="left-[42px]"
                className="w-[115px]"
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
          <Typography>-</Typography>
          <Controller
            name="end"
            control={control}
            render={({ field }) => (
              <DateInput
                isClearable
                className="w-[115px]"
                selected={field.value ? new Date(field.value) : null}
                minDate={
                  control._getWatch('start')
                    ? new Date(`${control._getWatch('start')}`)
                    : null
                }
                {...field}
                onChange={(val) => {
                  console.log({ val })
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
      </Stack>
      <Select
        onChange={(e) => handleChangeBranch(e)}
        labelId="branch"
        label={'Пункт'}
        isLoading={isBranchesLoading}
        value={selectedBranch}
        data={branches}
      />
      <TextInput
        label="Номер заказа"
        type="number"
        placeholder="0000"
        id={'order-number'}
        {...register('lab')}
      />
      <Stack spacing={'5px'}>
        <label htmlFor="input-day">Дата рождения</label>
        <Controller
          name="date_birth"
          control={control}
          render={({ field }) => (
            <DateInput
              // calendarClassName="left-[42px]"
              // className="w-full h-[30px] pl-2"
              {...field}
              isClearable
              showYearDropdown
              dateFormat={'yyyy-MM-dd'}
              dropdownMode="select"
              customInput={<TextInput />}
              selected={field.value ? new Date(field.value) : null}
              onChange={(val, e) => {
                // @ts-expect-error
                if (!e?.target.value) {
                  if (val) {
                    field.onChange(dayjs(val).format('YYYY-MM-DD'))
                  } else {
                    field.onChange(null)
                  }
                } else {
                  // @ts-expect-error
                  if (isValidDate(e.target.value as string)) {
                    field.onChange(
                      // @ts-expect-error
                      dayjs(e.target.value as string).format('YYYY-MM-DD')
                    )
                  }
                }
              }}
            />
          )}
        />
      </Stack>
      <Select
        onChange={(e) => handleChangeChoice(e)}
        labelId="choice"
        label={'Фильтр заказов'}
        isLoading={isChoicesLoading}
        value={selectedChoice}
        data={choices}
      />
      <TextInput
        label="Баркод контейнера"
        type="number"
        placeholder="0000"
        id={'barcode-number'}
        {...register('barcode')}
      />
    </Stack>
  )
}
