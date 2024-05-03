import { Stack } from '@mui/material'
import { BasicTabs } from '@/shared/ui'
import { RegionsTab } from '../Regions'

export const ResearchAccessibility = () => {
  return (
    <Stack sx={{ width: '100%' }}>
      <BasicTabs
        panels={[
          { item: <RegionsTab />, label: 'Регионы' },
          { item: <>Пункты забора</>, label: 'Пункты забора' },
          { item: <>Контрагенты</>, label: 'Контрагенты' },
        ]}
      />
    </Stack>
  )
}
