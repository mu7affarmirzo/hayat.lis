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
  const { data, isLoadingInfo } = useResearchInfo({ orderId })
  return (
    <Stack height={'100%'} spacing={'5px'} direction={'row'} pb={'10px'}>
      <ResearchStatusTable
        isLoadingInfo={isLoadingInfo}
        orderId={orderId}
        data={data?.[0]}
      />
      <Stack
        border={`1px solid ${colors.borderGray}`}
        width={'290px'}
        height={'100%'}
        spacing={'15px'}
      >
        <InfoResearchOrder orderId={orderId} order={data?.[0]} />
        <CurrentResult result={data?.[0]?.results?.[0].lab_research_test} />
      </Stack>
    </Stack>
  )
}
