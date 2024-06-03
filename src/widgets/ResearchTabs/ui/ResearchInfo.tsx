import { Stack } from '@mui/material'
import {
  CurrentResult,
  InfoResearchOrder,
} from '@/entities/info-research-order'
import { ResearchStatusTable } from '@/entities/research-status'
import { colors } from '@/shared/ui/colors'
import { useResearchInfo } from '../model/useResearchInfo'

interface ResearchInfoProps {
  orderId?: number
}

export const ResearchInfo = (props: ResearchInfoProps) => {
  const { orderId } = props
  const { data } = useResearchInfo({ orderId })
  return (
    <Stack spacing={'5px'} direction={'row'}>
      <ResearchStatusTable orderId={orderId} data={data?.[0]} />
      <Stack
        border={`1px solid ${colors.borderGray}`}
        width={'290px'}
        spacing={'15px'}
      >
        <InfoResearchOrder order={data?.[0]} />
        <CurrentResult result={data?.[0].results[0].lab_research_test} />
      </Stack>
    </Stack>
  )
}
