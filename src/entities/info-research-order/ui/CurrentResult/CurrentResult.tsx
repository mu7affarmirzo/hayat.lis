import { Box, Stack, Typography } from '@mui/material'
import { TextInput } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'

export const CurrentResult = () => {
  return (
    <Stack
      p={'5px'}
      spacing={'5px'}
      width={'100%'}
      sx={{ maxWidth: '290px', flex: 1 }}
    >
      <Stack
        direction={'row'}
        spacing={'20px'}
        p={'4px 10px'}
        sx={{ background: colors.bgLightGray }}
      >
        <Typography variant={'subtitle2'}>Текущий результат</Typography>
      </Stack>
      <Box>
        <TextInput type="number" />
      </Box>
    </Stack>
  )
}
