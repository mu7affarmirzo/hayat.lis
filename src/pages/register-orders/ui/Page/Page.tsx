import { Stack } from '@mui/material'
import { FilterOrders } from '@/features/filter-orders/filter'
import { AnalysisOrders } from '@/widgets/AnalysisOrders'

export function RegisterOrdersPage() {
  return (
    <Stack
      direction={'row'}
      // justifyContent={'space-between'}
      // flexWrap={'nowrap'}
      width="100%"
      sx={{ minHeight: 'calc(100vh - 76px)', height: '100%' }}
    >
      <FilterOrders />
      <AnalysisOrders />
    </Stack>
  )
}
