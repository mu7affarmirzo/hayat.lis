import { Box, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// import { type ReactNode } from 'react'
import { colors } from '@/shared/ui/colors'
import './../table.css'
import { DaysTableBody } from './TableBody'

// interface DaysTableProps {
// testsTableActions: ReactNode
// }

export const DaysTable = () => {
  return (
    <Stack
      p={'5px'}
      width={'100%'}
      maxWidth={'448px'}
      flex={1}
      // border={`1px solid ${colors.borderGray}`}
    >
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid ${colors.darkGray}`}
      >
        <Typography>Дни постановок</Typography>
      </Box>
      <Box>
        <TableContainer
          sx={{
            borderRadius: 0,
            flex: 1,
            height: '100%',
            maxHeight: '170px',
            boxShadow: 'none',
          }}
          component={Paper}
        >
          <Table size="small" stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ width: '26px' }}
                  className="bg-bgHoverGray"
                ></TableCell>
                <TableCell className="bg-bgHoverGray">День недели</TableCell>
                <TableCell className="bg-bgHoverGray">Рабочее место</TableCell>
              </TableRow>
            </TableHead>
            <DaysTableBody />
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  )
}
