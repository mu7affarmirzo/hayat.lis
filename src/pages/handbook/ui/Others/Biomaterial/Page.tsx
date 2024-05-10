import { Stack } from '@mui/material'
import { Biomaterial } from '@/widgets/Biomaterial'

export const BiomaterialPage = () => {
  return (
    <Stack spacing={'4px'} sx={{ height: 'calc(100vh - 76px)' }}>
      <Biomaterial />
    </Stack>
  )
}
