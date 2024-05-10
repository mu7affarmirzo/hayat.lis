import { Stack } from '@mui/material'
import { TemporaryRegulations } from '@/widgets/TemporaryRegulations'

export const TemporaryRegulationsPage = () => {
  return (
    <Stack spacing={'4px'} sx={{ height: 'calc(100vh - 76px)' }}>
      <TemporaryRegulations />
    </Stack>
  )
}
