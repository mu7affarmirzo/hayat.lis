import { Stack, Typography } from '@mui/material'
import { TextInput } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

export const ScheduledTime = () => {
  return (
    <Stack
      p={'10px'}
      flex={1}
      borderRadius={'4px'}
      border={`1px solid ${colors.borderLightGray}`}
      spacing={'5px'}
    >
      <Typography component={'h6'} variant="h6">
        Регламентное время
      </Typography>
      <Stack
        direction="row"
        width={'100%'}
        spacing={'10px'}
        alignItems={'center'}
      >
        <Typography textAlign={'right'} minWidth={'400px'} variant="body2">
          От поступления в лабораторию до постановки
        </Typography>
        <TextInput
          containerSx={{ width: 'auto' }}
          type="number"
          sx={{ width: '100px', textAlign: 'right' }}
        />
        <Typography variant="body2">МИН .</Typography>
      </Stack>
      <Stack
        direction="row"
        width={'100%'}
        spacing={'10px'}
        alignItems={'center'}
      >
        <Typography textAlign={'right'} minWidth={'400px'} variant="body2">
          От постановки до готовности
        </Typography>
        <TextInput
          type="number"
          containerSx={{ width: 'auto' }}
          sx={{ width: '100px', textAlign: 'right' }}
        />
        <Typography variant="body2">МИН .</Typography>
      </Stack>
      <Stack
        direction="row"
        width={'100%'}
        spacing={'10px'}
        alignItems={'center'}
      >
        <Typography textAlign={'right'} minWidth={'400px'} variant="body2">
          От готовности до валидации
        </Typography>
        <TextInput
          type="number"
          containerSx={{ width: 'auto' }}
          sx={{ width: '100px', textAlign: 'right' }}
        />
        <Typography variant="body2">МИН .</Typography>
      </Stack>
    </Stack>
  )
}
