import { Stack } from '@mui/material'
import { TextInput } from '@/shared/ui'
import { ResearchPanelsTable } from './ResearchPanelsTable'

export const ResearchPanels = () => {
  return (
    <Stack spacing={'10px'} width={'100%'}>
      <TextInput
        sx={{ flex: 1 }}
        label="Исследование"
        id="Исследование"
        direction="row"
        spacing="10px"
        containerSx={{
          alignItems: 'center',
        }}
      />
      <ResearchPanelsTable />
    </Stack>
  )
}
