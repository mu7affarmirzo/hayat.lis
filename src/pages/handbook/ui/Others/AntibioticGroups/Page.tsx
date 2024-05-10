import { Stack } from '@mui/material'
import { AntibioticGroups } from '@/widgets/AntibioticGroups'

export const AntibioticGroupsPage = () => {
  return (
    <Stack spacing={'4px'} sx={{ height: 'calc(100vh - 76px)' }}>
      <AntibioticGroups />
    </Stack>
  )
}
