import { Stack } from '@mui/material'
import { InfoOrdersTable } from '@/entities/info-orders'
import { OrdersTable } from '@/entities/orders'

export const AnalysisOrders = () => {
  return (
    <Stack p={'5px'} width={'100%'} spacing={'5px'}>
      <OrdersTable />
      <InfoOrdersTable />
    </Stack>
  )
}
