import { Checkbox, FormControlLabel, Stack } from '@mui/material'
import { TextInput, Button as CustomBtn, Icon, DateInput } from '@/shared/ui'

export const EditPackage = () => {
  return (
    <Stack p={'10px'} maxWidth={'1000px'} spacing={'5px'} height={'585px'}>
      <TextInput
        sx={{ width: '150px' }}
        label="Номер пакета"
        id="Номер пакета"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
        }}
        labelStyle={{ width: '200px', textAlign: 'right' }}
      />
      <Stack spacing={'10px'} alignItems={'center'} direction={'row'}>
        <TextInput
          sx={{ flex: 1 }}
          label="Наименование"
          id="Наименование"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '200px', textAlign: 'right' }}
        />
        <CustomBtn>
          <Icon type="files" />
        </CustomBtn>
      </Stack>
      <Stack spacing={'10px'} alignItems={'center'} direction={'row'}>
        <TextInput
          sx={{ flex: 1 }}
          label="Описание"
          id="Описание"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '200px', textAlign: 'right' }}
        />
        <CustomBtn sx={{ visibility: 'hidden' }}>
          <Icon type="files" />
        </CustomBtn>
      </Stack>

      <Stack width={'100%'} direction={'row'} spacing={'20px'}>
        <Stack
          spacing={'5px'}
          alignItems={'flex-end'}
          width={'100%'}
          maxWidth={'529px'}
        >
          <Stack direction={'row'} width={'100%'}>
            <Stack width={'100%'} alignItems={'flex-end'}>
              <FormControlLabel
                sx={{ gap: '10px', m: 0 }}
                labelPlacement="start"
                control={<Checkbox sx={{ p: 0 }} defaultChecked />}
                label="Активный"
              />
              <FormControlLabel
                sx={{ gap: '10px', m: 0 }}
                labelPlacement="start"
                control={<Checkbox sx={{ p: 0 }} defaultChecked />}
                label="НДС"
              />
            </Stack>
            <Stack width={'100%'} alignItems={'flex-end'}>
              <FormControlLabel
                sx={{ gap: '10px', m: 0 }}
                labelPlacement="start"
                control={<Checkbox sx={{ p: 0 }} defaultChecked />}
                label="Ветеринарный"
              />
              <FormControlLabel
                sx={{ gap: '10px', m: 0 }}
                labelPlacement="start"
                control={<Checkbox sx={{ p: 0 }} defaultChecked />}
                label="Расчет RP"
              />
            </Stack>
          </Stack>
          <FormControlLabel
            sx={{ gap: '10px' }}
            labelPlacement="start"
            control={<Checkbox sx={{ p: 0 }} defaultChecked />}
            label="Вкл. в расчет скидки по дисконтной карте"
          />
          <FormControlLabel
            sx={{ gap: '10px' }}
            labelPlacement="start"
            control={<Checkbox sx={{ p: 0 }} defaultChecked />}
            label="Допустимость ЦИТО для пакета"
          />
          <FormControlLabel
            sx={{ gap: '10px' }}
            labelPlacement="start"
            control={<Checkbox sx={{ p: 0 }} defaultChecked />}
            label="Отправлять рекламные уведомления"
          />
        </Stack>
        <Stack
          alignItems={'flex-end'}
          width={'100%'}
          spacing={'5px'}
          maxWidth={'529px'}
        >
          <Stack direction={'row'} spacing={'10px'}>
            <CustomBtn>Доступность пакетов</CustomBtn>
            <CustomBtn sx={{ visibility: 'hidden' }}>
              <Icon type="files" />
            </CustomBtn>
          </Stack>
          <Stack direction={'row'} spacing={'10px'}>
            <CustomBtn>Редактировать примечание к пакету</CustomBtn>
            <CustomBtn>
              <Icon type="files" />
            </CustomBtn>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={'10px'} alignItems={'center'} direction={'row'}>
        <TextInput
          sx={{ width: '150px' }}
          label="Альтернативный код"
          id="Альтернативный код"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
            flex: 1,
          }}
          labelStyle={{ width: '200px', textAlign: 'right' }}
        />
        <Stack
          spacing={'10px'}
          flex={1}
          alignItems={'center'}
          direction={'row'}
        >
          <TextInput
            sx={{ flex: 1 }}
            label="Альтернативный код"
            id="Альтернативный код"
            direction="row"
            spacing="10px"
            containerSx={{
              alignItems: 'center',
            }}
            labelStyle={{ width: '200px', textAlign: 'right' }}
          />
          <CustomBtn sx={{ visibility: 'hidden' }}>
            <Icon type="files" />
          </CustomBtn>
        </Stack>
      </Stack>
      <Stack
        width={'100%'}
        alignItems={'flex-end'}
        spacing={'5px'}
        maxWidth={'410px'}
      >
        <Stack direction={'row'} spacing={'10px'}>
          <label htmlFor="date-input">Действует до</label>
          <DateInput id="date-input" onChange={() => {}} />
        </Stack>
        <FormControlLabel
          sx={{ gap: '10px', m: 0 }}
          labelPlacement="start"
          control={<Checkbox sx={{ p: 0 }} defaultChecked />}
          label="Отображать на сайте"
        />
      </Stack>
      <Stack
        px={'10px'}
        py={'20px'}
        alignItems={'flex-end'}
        justifyContent={'flex-end'}
        height={'92px'}
        width={'100%'}
      >
        <CustomBtn sx={{ textTransform: 'uppercase' }}>Панели</CustomBtn>
      </Stack>
    </Stack>
  )
}
