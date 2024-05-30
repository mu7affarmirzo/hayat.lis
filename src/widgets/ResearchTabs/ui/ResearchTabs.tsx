import { Stack } from '@mui/material'
import { ContainerInfoTable } from '@/entities/container-info'
import {
  InfoResearchOrder,
  CurrentResult,
} from '@/entities/info-research-order'
import { ResearchTable } from '@/entities/research'
import { ResearchStatusTable } from '@/entities/research-status'
import { EditQRCode } from '@/features/qr-container/edit-qr-code'
import { FilterTabs } from '@/features/research/filter-research'
import { FilterResearch } from '@/features/sampling-conditions/filter-research'
import { colors } from '@/shared/ui/colors'
import { useResearchTabs } from '../model/useResearchTabs'

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
        <Stack spacing={'5px'} direction={'row'}>
          <ResearchStatusTable orderId={activeRow} />
          <Stack
            border={`1px solid ${colors.borderGray}`}
            width={'290px'}
            spacing={'15px'}
          >
            <InfoResearchOrder />
            <CurrentResult />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
