import { Stack } from '@mui/material'
import { HandbookResearchPacks } from '@/widgets/HandbookResearchPacks'

export const HandbookResearchPacksPage = () => {
  return (
    <Stack sx={{ height: 'calc(100vh - 76px)' }}>
      <HandbookResearchPacks />
    </Stack>
  )
}
