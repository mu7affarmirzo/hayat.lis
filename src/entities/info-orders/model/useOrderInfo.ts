import { useResearchItemQuery } from '../api/researchListApi'
import { useInfoOrdersTable } from './useInfoOrdersTable'

type OrderInfoHookProps = {
  orderId?: number
}

export const useOrderInfo = (props: OrderInfoHookProps) => {
  const { orderId } = props
  const { data, isLoading: isLoadingData } = useResearchItemQuery(
    { orderId: `${orderId}` },
    { skip: !orderId }
  )

  const infoOrderData = useInfoOrdersTable({ data: data?.[0] })

  return { data, isLoadingData, ...infoOrderData }
}
