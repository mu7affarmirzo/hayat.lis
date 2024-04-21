import { Stack } from '@mui/material'
import { FilterOrders } from '@/features/filter-orders/filter'
import { AnalysisOrders } from '@/widgets/AnalysisOrders/AnalysisOrders'

export function RegisterOrdersPage() {
  return (
    <Stack
      direction={'row'}
      // justifyContent={'space-between'}
      // flexWrap={'nowrap'}
      width="100%"
      sx={{ height: 'calc(100vh - 76px)' }}
    >
      <FilterOrders />
      <AnalysisOrders />
    </Stack>
  )
}
