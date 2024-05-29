import { ArrowRight } from '@mui/icons-material'
import { Box, Paper, Stack, Typography } from '@mui/material'
import { Icon } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { useResearchGroups } from './../../../../model/useResearchGroups'

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
          <Stack sx={{ cursor: 'pointer' }} direction={'row'} key={item.id}>
            <Stack
              borderBottom={`1px solid ${colors.borderLightGray}`}
              borderLeft={`1px solid ${colors.borderLightGray}`}
              borderRight={`1px solid ${colors.bgHoverGray}`}
              p={'3px'}
              direction="row"
            >
              <ArrowRight width={'20px'} color="action" />
              <Icon type="note-plus" />
            </Stack>
            <Box
              borderBottom={`1px solid ${colors.bgHoverGray}`}
              borderLeft={`1px solid ${colors.bgHoverGray}`}
              borderRight={`1px solid ${colors.bgHoverGray}`}
              p={'3px 5px'}
              width={'100%'}
            >
              <Typography variant="caption">{item.name}</Typography>
            </Box>
          </Stack>
        ))}
      </Paper>
    </Stack>
  )
}
