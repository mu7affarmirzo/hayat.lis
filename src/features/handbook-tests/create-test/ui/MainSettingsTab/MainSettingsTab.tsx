import { Stack } from '@mui/material'
import { colors } from '@/shared/ui/colors'
import { Parameters } from './Parameters'

export const MainSettingsTab = () => {
  return (
    <Stack
      border={`1px solid ${colors.bgHoverGray}`}
      borderTop={`1px solid #8E8E8E`}
      direction={'row'}
      width={'100%'}
      p={'10px'}
      spacing={'10px'}
      // overflow={'auto'}
    >
      <Parameters />
    </Stack>
  )
}
