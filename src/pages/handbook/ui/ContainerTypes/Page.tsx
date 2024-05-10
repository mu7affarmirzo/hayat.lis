import { Stack } from '@mui/material'
import { ContainerTypes } from '@/widgets/ContainerTypes'

export const ContainerTypesPage = () => {
  return (
    <Stack sx={{ height: 'calc(100vh - 76px)' }}>
      <ContainerTypes />
    </Stack>
  )
}
