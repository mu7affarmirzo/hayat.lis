import { Stack } from '@mui/material'
import { BasicTabs } from '@/shared/ui'
import { CollectionPointsTab } from '../CollectionPoints'
import { CounterpartiesTab } from '../Counterparties'
import { RegionsTab } from '../Regions'

export const ResearchAccessibility = () => {
  return (
    <Stack sx={{ width: '100%' }}>
      <BasicTabs
        panels={[
          { item: <RegionsTab />, label: 'Регионы' },
          { item: <CollectionPointsTab />, label: 'Пункты забора' },
          { item: <CounterpartiesTab />, label: 'Контрагенты' },
        ]}
      />
    </Stack>
  )
}
