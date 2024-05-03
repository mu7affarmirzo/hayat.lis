import { Stack } from '@mui/material'
import { TextInput } from '@/shared/ui'
import { ContainersTable } from './ResearchContainersTable'

export const ResearchContainers = () => {
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
      <ContainersTable />
    </Stack>
  )
}
