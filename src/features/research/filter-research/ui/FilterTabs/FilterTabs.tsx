import { Stack } from '@mui/material'
import { BasicTabs } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { ByWorkPlacesTab } from '../ByWorkPlacesTab'
import { ResearchTab } from '../ResearchTab'

export const FilterTabs = () => {
  return (
    <Stack
      maxWidth={'400px'}
      width={'400px'}
      p={'10px'}
      sx={{ backgroundColor: colors.bgLightGray }}
    >
      <BasicTabs
        panels={[
          { item: <ResearchTab />, label: 'Исследования' },
          { item: <ByWorkPlacesTab />, label: 'По раб. местам' },
        ]}
      />
    </Stack>
  )
}
