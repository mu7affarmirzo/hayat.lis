import { Box, Paper, Stack, Typography } from '@mui/material'
import { type GroupResearch as ResearchType } from '@/shared/types'
import { colors } from '@/shared/ui/colors'
import { useResearchGroups } from '../../model/useResearchGroups'
import { ResearchItem } from './ResearchItem'

export const GroupResearch = () => {
  const { researchGroup, categoryId, labId, setCategoryId, setLabId } =
    useResearchGroups()

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
        {researchGroup?.map((item: ResearchType) => (
          <ResearchItem
            setCategoryId={setCategoryId}
            setLabId={setLabId}
            labId={labId}
            categoryId={categoryId}
            item={item}
            key={item.id}
          />
        ))}
      </Paper>
    </Stack>
  )
}
