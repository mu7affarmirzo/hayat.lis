import { Stack } from '@mui/material'
import { Icon, TextInput, Button as CustomButton } from '@/shared/ui'

export const EditUnitsOfMeasure = () => {
  return (
    <Stack height={'calc(100vh - 100px)'} spacing={'10px'} pt={'100px'}>
      <Stack spacing={'10px'} alignItems={'center'} direction={'row'}>
        <TextInput
          sx={{ width: '300px' }}
          label="Наименование"
          id="Наименование"
          direction="row"
          spacing="10px"
          containerSx={{
            alignItems: 'center',
            width: 'auto',
          }}
          labelStyle={{ width: '200px', textAlign: 'right' }}
        />
        <CustomButton>
          <Icon type="book-open" />
        </CustomButton>
      </Stack>
      <TextInput
        sx={{ width: '300px' }}
        label="ID внеш. системы"
        id="ID внеш. системы"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
          width: 'auto',
        }}
        labelStyle={{ width: '200px', textAlign: 'right' }}
      />
    </Stack>
  )
}
