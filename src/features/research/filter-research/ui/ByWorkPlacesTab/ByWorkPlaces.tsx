import { Box, CircularProgress, Paper, Stack, Typography } from '@mui/material'
import { colors } from '@/shared/ui/colors'
import { type GroupHookReturnType } from '../../model/useResearchGroups'

export const ByWorkPlaces = (props: GroupHookReturnType) => {
  const {
    branchData,
    isLoadingBranches,
    setCategoryId,
    setLabId,
    setBranchId,
    branchId,
  } = props

  return (
    <Stack width="100%">
      <Paper
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',
          maxHeight: '290px',
          height: '100%',
          overflowY: 'auto',
          border: '1px solid #BDBDBD',
        }}
      >
        {isLoadingBranches ? (
          <Stack
            width={'100%'}
            height={'288px'}
            alignItems={'center'}
            p={'20px'}
            justifyContent={'center'}
          >
            <CircularProgress size={40} />
          </Stack>
        ) : (
          branchData?.map((item) => (
            <Stack
              onClick={() => {
                if (branchId === item.id) {
                  setBranchId(undefined)
                } else {
                  setBranchId(item.id)
                  setCategoryId(undefined)
                  setLabId(undefined)
                }
              }}
              sx={{ cursor: 'pointer' }}
              direction={'row'}
              key={item.id}
            >
              <Box
                borderBottom={`1px solid ${colors.bgHoverGray}`}
                borderLeft={`1px solid ${colors.bgHoverGray}`}
                borderRight={`1px solid ${colors.bgHoverGray}`}
                p={'3px 5px'}
                width={'100%'}
              >
                <Typography
                  variant="caption"
                  fontWeight={item.id === branchId ? 500 : 400}
                >
                  {item.name}
                </Typography>
              </Box>
            </Stack>
          ))
        )}
      </Paper>
    </Stack>
  )
}
