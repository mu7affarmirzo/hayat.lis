import { Stack } from '@mui/material'
import { Button as CustomBtn, TextInput } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

export const SearchPackage = () => {
  return (
    <Stack
      border={`1px solid ${colors.borderLightGray}`}
      borderRadius={'2px'}
      direction={'row'}
      spacing={'10px'}
      p={'10px'}
      alignItems={'center'}
      justifyContent={'start'}
    >
      <TextInput
        sx={{ width: '400px' }}
        label="Наименование / код пакета или исследования"
        id="Наименование / код пакета или исследования"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
          width: 'auto',
        }}
      />
      <CustomBtn sx={{ height: '30px' }}>Поиск</CustomBtn>
      <CustomBtn sx={{ height: '30px' }}>Обновить</CustomBtn>
    </Stack>
  )
}
