import { useResearchItemQuery } from '../api/researchListApi'

type ResearchInfoHookProps = {
  orderId?: number
}

export const useResearchInfo = (props: ResearchInfoHookProps) => {
  const { orderId } = props
  const { data, isLoading: isLoadingInfo } = useResearchItemQuery(
    { orderId: `${orderId}` },
    { skip: !orderId }
  )

  return { data, isLoadingInfo }
}
