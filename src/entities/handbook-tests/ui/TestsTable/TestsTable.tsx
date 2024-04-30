import { Box, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { type ReactNode } from 'react'
import { colors } from '@/shared/ui/colors'
import './../table.css'
import { TestsTableBody } from './TableBody'

interface TestsTableProps {
  testsTableActions: ReactNode
}

export const TestsTable = (props: TestsTableProps) => {
  return (
    <Stack
      p={'5px'}
      width={'100%'}
      maxWidth={'448px'}
      border={`1px solid ${colors.borderGray}`}
    >
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid ${colors.darkGray}`}
      >
        <Typography>Тесты</Typography>
      </Box>
      <Box>
        <TableContainer
          sx={{
            borderRadius: 0,
            minHeight: 800,
            maxHeight: 800,
            boxShadow: 'none',
          }}
          component={Paper}
        >
          <Table
            size="small"
            stickyHeader
            // sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ width: '26px' }}
                  className="bg-bgHoverGray"
                ></TableCell>
                <TableCell className="bg-bgHoverGray">Код</TableCell>
                <TableCell className="bg-bgHoverGray">Наименование</TableCell>
                <TableCell className="bg-bgHoverGray">Ед.изм.</TableCell>
                <TableCell className="bg-bgHoverGray">Вкл.</TableCell>
              </TableRow>
            </TableHead>
            <TestsTableBody />
          </Table>
        </TableContainer>
      </Box>
      <Box mt={'10px'}>{props.testsTableActions}</Box>
    </Stack>
  )
}
