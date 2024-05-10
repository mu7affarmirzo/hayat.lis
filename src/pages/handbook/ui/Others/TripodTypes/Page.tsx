import { Stack } from '@mui/material'
import { TripodTypes } from '@/widgets/TripodTypes'

export const TripodTypesPage = () => {
  return (
    <Stack spacing={'4px'} sx={{ height: 'calc(100vh - 76px)' }}>
      <TripodTypes />
    </Stack>
  )
}
