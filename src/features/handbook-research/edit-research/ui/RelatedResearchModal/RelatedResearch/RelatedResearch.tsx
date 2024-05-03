import { Stack } from '@mui/material'
import { Select, TextInput } from '@/shared/ui'
import { RelatedResearchTable } from './RelatedResearchTable'

export const RelatedResearch = () => {
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
      <Select
        disabled
        containerSx={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        }}
        labelSx={{
          width: 'max-content',
          whiteSpace: 'nowrap',
          marginRight: '15px !important',
          overflow: 'inherit',
        }}
        data={[]}
        sx={{ width: '100%' }}
        label="Биоматериал"
      />
      <RelatedResearchTable />
    </Stack>
  )
}
