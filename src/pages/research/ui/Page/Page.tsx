import { Stack } from '@mui/material'
import { ResearchTabs } from '@/widgets/ResearchTabs'

export function ResearchPage() {
  return (
    <Stack direction={'row'} width="100%" sx={{ height: 'calc(100vh - 76px)' }}>
      <ResearchTabs />
    </Stack>
  )
}
