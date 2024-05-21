import { Stack } from '@mui/material'
import { Icon, Select, TextInput, Button as CustomButton } from '@/shared/ui'

export const EditAntibiotic = () => {
  return (
    <Stack height={'calc(100vh - 167px)'} spacing={'10px'} pt={'100px'}>
      <Select
        disabled
        containerSx={{
          flexDirection: 'row',
          gap: '10px',
          alignItems: 'center',
        }}
        labelSx={{ width: '200px', textAlign: 'right' }}
        data={[]}
        sx={{ width: '300px' }}
        label="Группа"
      />
      <Stack spacing={'10px'} alignItems={'center'} direction={'row'}>
        <TextInput
          sx={{ width: '400px' }}
          label="Название"
          id="Название"
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
    </Stack>
  )
}
