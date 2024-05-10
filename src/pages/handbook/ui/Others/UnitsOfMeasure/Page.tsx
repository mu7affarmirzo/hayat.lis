import { Stack } from '@mui/material'
import { UnitsOfMeasure } from '@/widgets/UnitsOfMeasure'

export const UnitsOfMeasurePage = () => {
  return (
    <Stack spacing={'4px'} sx={{ height: 'calc(100vh - 76px)' }}>
      <UnitsOfMeasure />
    </Stack>
  )
}
