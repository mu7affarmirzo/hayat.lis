import { Box, Stack, Typography } from '@mui/material'
import { colors } from '@/shared/ui/colors'
import { CollectionPointsTable } from './CollectionPointsTable'

export const CollectionPointsTab = () => {
  return (
    <Stack border={`1px solid ${colors.darkGray}`}>
      <Box
        // borderRight={`1px solid ${colors.borderLighterGray}`}
        // borderLeft={`1px solid ${colors.borderLighterGray}`}
        sx={{ background: colors.bgLightGray }}
        p={'10px'}
      >
        <Typography sx={{ color: '#434544' }}>
          Поместите сюда заголовок колонки для группировки по этой колонке
        </Typography>
      </Box>
      <CollectionPointsTable />
    </Stack>
  )
}
