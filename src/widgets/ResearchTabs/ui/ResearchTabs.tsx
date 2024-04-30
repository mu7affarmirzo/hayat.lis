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

export const ResearchTabs = () => {
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
          samplingConditionsSlot={<FilterResearch />}
          containerInfoTable={<ContainerInfoTable editQrSlot={EditQRCode} />}
        />
        <Stack spacing={'5px'} direction={'row'}>
          <ResearchStatusTable />
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
