import { Stack } from '@mui/material'
import { HandbookGroups } from '@/entities/handbook-groups'
import { HandbookResearchTable } from '@/entities/handbook-research'
import { HandbookTestTable } from '@/entities/handbook-tests'
import { HandbookDaysTable } from '@/entities/production-days'
import { HandbookCreateResearch } from '@/features/handbook-research/create-research'
import { HandbookDeleteResearch } from '@/features/handbook-research/delete-research'
import { HandbookEditResearch } from '@/features/handbook-research/edit-research'
import { HandbookCreateTest } from '@/features/handbook-tests/create-test'
import { HandbookDeleteTest } from '@/features/handbook-tests/delete-test'

export const HandbookResearch = () => {
  return (
    <Stack direction={'row'}>
      <HandbookGroups />
      <HandbookResearchTable
        researchTableActions={
          <Stack spacing={'10px'} direction={'row'}>
            <HandbookCreateResearch />
            <HandbookDeleteResearch />
            <HandbookEditResearch />
          </Stack>
        }
      />
      <Stack>
        <HandbookTestTable
          testsTableActions={
            <Stack spacing={'10px'} direction={'row'}>
              <HandbookCreateTest />
              <HandbookDeleteTest />
            </Stack>
          }
        />
        <HandbookDaysTable />
      </Stack>
    </Stack>
  )
}
