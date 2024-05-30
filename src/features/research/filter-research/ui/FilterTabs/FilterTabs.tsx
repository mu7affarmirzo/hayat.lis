import { Stack, Typography } from '@mui/material'
import { BasicTabs, Button, Icon } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { useResearchTab } from '../../model/useResearchTab'
import { ByWorkPlaces } from '../ByWorkPlacesTab'
import { GroupResearch } from '../ResearchTab'
import { SelectionResearch } from './SelectionResearch'

export const FilterTabs = () => {
  const { register, control, handleSubmit, onSubmit } = useResearchTab()

  return (
    <Stack
      maxWidth={'400px'}
      width={'400px'}
      p={'10px'}
      sx={{ backgroundColor: colors.bgLightGray }}
    >
      <Stack
        component={'form'}
        onSubmit={handleSubmit(onSubmit)}
        spacing={'10px'}
      >
        <BasicTabs
          panels={[
            { item: <GroupResearch />, label: 'Исследования' },
            { item: <ByWorkPlaces />, label: 'По раб. местам' },
          ]}
        />
        <SelectionResearch register={register} control={control} />
        <Button
          type="submit"
          variant="contained"
          color="inherit"
          fullWidth
          sx={{
            display: 'flex',
            gap: '8px',
            border: `1px solid ${colors.borderLighterGray}`,
            boxShadow: 'none',
            background: colors.backgroundGray,
          }}
        >
          <Icon type="refresh" />
          <Typography fontWeight={500}>Обновить</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}
