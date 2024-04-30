import { Stack } from '@mui/material'
import { HandbookGroups } from '@/entities/handbook-groups'
import { HandbookResearchTable } from '@/entities/handbook-research'
import { HandbookTestTable } from '@/entities/handbook-tests'
import { HandbookDaysTable } from '@/entities/production-days'

export const HandbookResearch = () => {
  return (
    <Stack direction={'row'}>
      <HandbookGroups />
      <HandbookResearchTable researchTableActions={<></>} />
      <Stack>
        <HandbookTestTable testsTableActions={<></>} />
        <HandbookDaysTable />
      </Stack>
    </Stack>
  )
}
