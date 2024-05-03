import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
} from '@mui/material'
import { Button as CustomBtn, Icon, TextInput } from '@/shared/ui'

export const Parameters = () => {
  return (
    <Stack width={'100%'} spacing={'5px'}>
      <Stack
        spacing={'10px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={'row'}
      >
        <TextInput
          sx={{ width: '200px' }}
          label="Номер"
          id="Номер"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <FormControlLabel
          control={<Checkbox sx={{ py: 0 }} />}
          labelPlacement="start"
          label="Активный"
        />
      </Stack>
      <Stack spacing={'10px'} alignItems={'center'} direction={'row'}>
        <TextInput
          sx={{ flex: 1 }}
          label="Название теста"
          id="Название теста"
          direction="row"
          spacing="10px"
          multiline
          minRows={3}
          maxRows={3}
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <CustomBtn>
          <Icon type="files" />
        </CustomBtn>
      </Stack>
      <Stack
        spacing={'10px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={'row'}
      >
        <TextInput
          sx={{ width: '300px' }}
          label="Короткое название"
          id="Короткое название"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
      </Stack>
      <Stack
        spacing={'10px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={'row'}
      >
        <TextInput
          sx={{ width: '450px' }}
          label="Группа"
          id="Группа"
          direction="row"
          spacing="10px"
          multiline
          minRows={5}
          maxRows={5}
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
      </Stack>
      <Stack
        spacing={'10px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        direction={'row'}
      >
        <Stack direction={'row'} spacing={'15px'}>
          <TextInput
            sx={{ width: '150px' }}
            label="Тип результата"
            id="Тип результата"
            direction="row"
            spacing="10px"
            containerSx={{
              alignItems: 'center',
            }}
            labelStyle={{ width: '250px', textAlign: 'right' }}
          />
          <FormControlLabel
            control={<Checkbox sx={{ py: 0 }} />}
            labelPlacement="start"
            sx={{ width: '100%' }}
            label="Игнорировать статус нормы"
          />
        </Stack>
        <FormControlLabel
          control={<Checkbox sx={{ py: 0 }} />}
          labelPlacement="start"
          label="Ввод результата обязателен"
        />
      </Stack>
      <Stack
        width={'100%'}
        direction={'row'}
        justifyContent={'space-between'}
        spacing={'10px'}
      >
        <TextInput
          sx={{ width: '446px' }}
          label="Горячие клавиши"
          id="Горячие клавиши"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <CustomBtn>
          <Icon type="dots-horizontal" />
        </CustomBtn>
      </Stack>
      <TextInput
        sx={{ width: '708px' }}
        label="Методика"
        id="Методика"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
        }}
        labelStyle={{ width: '250px', textAlign: 'right' }}
      />
      <TextInput
        sx={{ width: '708px' }}
        label="Инструмент"
        id="Инструмент"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
        }}
        labelStyle={{ width: '250px', textAlign: 'right' }}
      />
      <TextInput
        sx={{ width: '90px' }}
        label="Клавиша"
        id="Клавиша"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
        }}
        labelStyle={{ width: '250px', textAlign: 'right' }}
      />
      <Stack width={'100%'} direction={'row'} spacing={'10px'}>
        <Stack
          direction={'row'}
          spacing={'10px'}
          justifyContent={'space-between'}
        >
          <TextInput
            sx={{ width: '300px' }}
            label="Единица измерения"
            id="Единица измерения"
            direction="row"
            spacing="10px"
            containerSx={{
              alignItems: 'center',
            }}
            labelStyle={{ width: '250px', textAlign: 'right' }}
          />
          <CustomBtn>
            <Icon type="plus" />
          </CustomBtn>
        </Stack>
        <CustomBtn sx={{ width: '200px' }}>Нормы</CustomBtn>
      </Stack>
      <Stack width={'100%'} direction={'row'} spacing={'10px'}>
        <TextInput
          sx={{ width: '240px' }}
          label="Результат по умолчанию"
          id="Результат по умолчанию"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <CustomBtn sx={{ width: '200px' }}>Методики</CustomBtn>
      </Stack>
      <Stack width={'100%'} direction={'row'} spacing={'10px'}>
        <TextInput
          sx={{ width: '240px' }}
          label="Доп. Код"
          id="Доп. Код"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
          }}
          labelStyle={{ width: '250px', textAlign: 'right' }}
        />
        <CustomBtn sx={{ width: '200px' }}>Формулы</CustomBtn>
      </Stack>
      <TextInput
        sx={{ width: '250px' }}
        label="Дополнительй код для повтора"
        id="Дополнительй код для повтора"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
        }}
        labelStyle={{ width: '250px', textAlign: 'right' }}
      />
      <Stack width={'100%'} direction={'row'} spacing={'90px'}>
        <FormControl
          sx={{ minWidth: '450px' }}
          component="fieldset"
          variant="standard"
        >
          <FormGroup sx={{ gap: '5px', justifyContent: 'flex-end' }}>
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Печать результата"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Печать интерпретации"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Определять вхождение в норму"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Отображать статус на бланке результатов"
            />
            <FormControlLabel
              control={<Checkbox sx={{ py: 0 }} />}
              labelPlacement="start"
              label="Является микроорганизмом"
            />
          </FormGroup>
        </FormControl>
        <TextInput
          sx={{ width: '408px' }}
          label="Формула для статуса теста"
          id="Формула для статуса теста"
          spacing="10px"
          multiline
          minRows={3}
          maxRows={3}
        />
      </Stack>
      <TextInput
        sx={{ width: '226px' }}
        label="Id тест системы"
        id="Id тест системы"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
        }}
        labelStyle={{ width: '250px', textAlign: 'right' }}
      />
      <TextInput
        sx={{ width: '739px' }}
        label="Наименование тест системы"
        id="Наименование тест системы"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
        }}
        labelStyle={{ width: '250px', textAlign: 'right' }}
      />{' '}
    </Stack>
  )
}
