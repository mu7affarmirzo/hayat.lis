import { Stack } from '@mui/material'
import { ResearchTabs } from '@/widgets/ResearchTabs'

export function ResearchPage() {
  return (
    <Stack
      direction={'row'}
      width="100%"
      sx={{ minHeight: 'calc(100vh - 76px)', height: '100%' }}
    >
      <ResearchTabs />
    </Stack>
  )
}
