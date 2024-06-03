import { Stack } from '@mui/material'
import { ContainerInfoTable } from '@/entities/container-info'
import { ResearchTable } from '@/entities/research'
import { EditQRCode } from '@/features/qr-container/edit-qr-code'
import { FilterTabs } from '@/features/research/filter-research'
import { FilterResearch } from '@/features/sampling-conditions/filter-research'
import { useResearchTabs } from '../model/useResearchTabs'
import { ResearchInfo } from './ResearchInfo'

export const ResearchTabs = () => {
  const { activeRow, researchList, setActiveRow } = useResearchTabs()
  return (
    <Stack direction={'row'} width={'100%'}>
      <FilterTabs />
      <Stack
        gap={'5px'}
        spacing={'5px'}
        marginRight={'5px'}
        width={'100%'}
        paddingLeft={'5px'}
      >
        <ResearchTable
          data={researchList}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
          samplingConditionsSlot={<FilterResearch />}
          containerInfoTable={
            <ContainerInfoTable
              resultsList={researchList}
              editQrSlot={EditQRCode}
            />
          }
        />
        <ResearchInfo orderId={activeRow} />
      </Stack>
    </Stack>
  )
}
