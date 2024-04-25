import { Stack } from '@mui/material'
import { ContainerInfoTable } from '@/entities/container-info'
import { InfoOrdersTable } from '@/entities/info-orders'
import { OrdersTable } from '@/entities/orders'
import { EditQRCode } from '@/features/qr-container/edit-qr-code'

export const AnalysisOrders = () => {
  return (
    <Stack p={'5px'} width={'100%'} spacing={'5px'}>
      <OrdersTable
        containerInfoTable={<ContainerInfoTable editQrSlot={EditQRCode} />}
      />
      <InfoOrdersTable />
    </Stack>
  )
}
