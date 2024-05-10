import { Stack } from '@mui/material'
import { Antibiotics } from '@/widgets/Antibiotics'

export const AntibioticsPage = () => {
  return (
    <Stack spacing={'4px'} sx={{ height: 'calc(100vh - 76px)' }}>
      <Antibiotics />
    </Stack>
  )
}
