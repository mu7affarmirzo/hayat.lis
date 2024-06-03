import { useResearchItemQuery } from '../api/researchListApi'

type ResearchInfoHookProps = {
  orderId?: number
}

export const useResearchInfo = (props: ResearchInfoHookProps) => {
  const { orderId } = props
  const { data } = useResearchItemQuery(
    { orderId: `${orderId}` },
    { skip: !orderId }
  )

  return { data }
}
