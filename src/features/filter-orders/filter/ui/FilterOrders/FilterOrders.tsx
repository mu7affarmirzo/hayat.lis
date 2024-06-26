/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CircularProgress, Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'
import { Controller } from 'react-hook-form'
import { DatePicker, TextInput, Autocomplete } from '@/shared/ui'
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
              <DatePicker
                max={
                  control._getWatch('end')
                    ? dayjs(`${control._getWatch('end')}`).format('YYYY-MM-DD')
                    : undefined
                }
                {...field}
                onChange={(e) => {
                  if (e.target.value) {
                    field.onChange(dayjs(e.target.value).format('YYYY-MM-DD'))
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
              <DatePicker
                min={
                  control._getWatch('start')
                    ? dayjs(`${control._getWatch('start')}`).format(
                        'YYYY-MM-DD'
                      )
                    : undefined
                }
                {...field}
                onChange={(e) => {
                  if (e.target.value) {
                    field.onChange(dayjs(e.target.value).format('YYYY-MM-DD'))
                  } else {
                    field.onChange(null)
                  }
                }}
              />
            )}
          />
        </Stack>
      </Stack>
      {/* <Select
        onChange={(e) => handleChangeBranch(e)}
        labelId="branch"
        label={'Пункт'}
        isLoading={isBranchesLoading}
        value={selectedBranch}
        data={branches}
      /> */}
      <Autocomplete
        disablePortal
        id="branch"
        value={selectedBranch}
        onInputChange={(e, val) => handleChangeBranch(e, val)}
        options={branches ?? []}
        loading={isBranchesLoading}
        sx={{ flex: 1, background: colors.bgLightGray }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onChange={(e, val) => handleChange(e, val)}
        renderInput={(params) => (
          <TextInput
            {...params}
            id="Пункт"
            label="Пункт"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isBranchesLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
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
            <DatePicker
              {...field}
              onChange={(e) => {
                if (e.target.value) {
                  field.onChange(dayjs(e.target.value).format('YYYY-MM-DD'))
                } else {
                  field.onChange(null)
                }
              }}
            />
          )}
        />
      </Stack>
      <Autocomplete
        disablePortal
        id="choice"
        value={selectedChoice}
        onInputChange={(e, val) => handleChangeChoice(e, val)}
        options={choices ?? []}
        loading={isChoicesLoading}
        sx={{ flex: 1, background: colors.bgLightGray }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        onChange={(e, val) => handleChange(e, val)}
        renderInput={(params) => (
          <TextInput
            {...params}
            id="Фильтр заказов"
            label="Фильтр заказов"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isChoicesLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
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
