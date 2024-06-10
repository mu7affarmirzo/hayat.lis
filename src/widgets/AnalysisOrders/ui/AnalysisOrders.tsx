import { Stack } from '@mui/material'
import { ContainerInfoTable } from '@/entities/container-info'
import { InfoOrdersTable } from '@/entities/info-orders'
import { OrdersTable } from '@/entities/orders'
import { EditQRCode } from '@/features/qr-container/edit-qr-code'
import { useAnalysisOrders } from '../model/useAnalysisOrders'

export const AnalysisOrders = () => {
  const { activeRow, researchList, setActiveRow, isLoadingResearchList } =
    useAnalysisOrders()
  return (
    <Stack p={'5px'} width={'100%'} spacing={'5px'}>
      <OrdersTable
        data={researchList}
        isLoading={isLoadingResearchList}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
        containerInfoTable={
          <ContainerInfoTable
            resultsList={researchList}
            editQrSlot={EditQRCode}
          />
        }
      />
      <InfoOrdersTable orderId={activeRow} />
    </Stack>
  )
}
