import { Box, Paper, Stack, Typography } from '@mui/material'
import { workPlaces } from '@/features/research/filter-research/model/byWorkPlaces'
import { colors } from '@/shared/ui/colors'

export const ByWorkPlaces = () => {
  return (
    <Stack width="100%">
      <Paper
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',
          maxHeight: '290px',
          overflowY: 'auto',
          border: '1px solid #BDBDBD',
        }}
      >
        {workPlaces.map((item) => (
          <Stack sx={{ cursor: 'pointer' }} direction={'row'} key={item.id}>
            <Box
              borderBottom={`1px solid ${colors.bgHoverGray}`}
              borderLeft={`1px solid ${colors.bgHoverGray}`}
              borderRight={`1px solid ${colors.bgHoverGray}`}
              p={'3px 5px'}
              width={'100%'}
            >
              <Typography variant="caption">{item.title}</Typography>
            </Box>
          </Stack>
        ))}
      </Paper>
    </Stack>
  )
}
