import { Stack } from '@mui/material'
import { ReagentTypes } from '@/widgets/ReagentTypes'

export const ReagentTypesPage = () => {
  return (
    <Stack spacing={'4px'} sx={{ height: 'calc(100vh - 76px)' }}>
      <ReagentTypes />
    </Stack>
  )
}
