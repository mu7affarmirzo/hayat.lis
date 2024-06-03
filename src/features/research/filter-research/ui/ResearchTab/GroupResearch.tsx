import { Box, Paper, Stack, Typography } from '@mui/material'
import { colors } from '@/shared/ui/colors'
import { useResearchGroups } from '../../model/useResearchGroups'
import { ResearchItem } from './ResearchItem'

export const GroupResearch = () => {
  const { researchGroup } = useResearchGroups()

  return (
    <Stack width="100%">
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid ${colors.darkGray}`}
      >
        <Typography>Группа/Исследование</Typography>
      </Box>
      <Paper
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',
          maxHeight: '276px',
          minHeight: '276px',
          overflowY: 'auto',
        }}
      >
        {researchGroup?.map((item) => (
          <ResearchItem item={item} key={item.id} />
        ))}
      </Paper>
    </Stack>
  )
}
