import { Stack, Typography } from '@mui/material'
import { Button, Icon } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { ByWorkPlaces } from './components/ByWorkPlaces/ByWorkPlaces'
import { SelectionResearch } from './components/SelectionResearch/SelectionResearch'

export const ByWorkPlacesTab = () => {
  return (
    <Stack spacing={'10px'}>
      <ByWorkPlaces />
      <SelectionResearch />
      <Button
        variant="contained"
        color="inherit"
        fullWidth
        sx={{
          display: 'flex',
          gap: '8px',
          border: `1px solid ${colors.borderLighterGray}`,
          boxShadow: 'none',
        }}
      >
        <Icon type="refresh" />
        <Typography fontWeight={500}>Обновить</Typography>
      </Button>
    </Stack>
  )
}
