import { Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// import { type ReactNode } from 'react'
import './table.css'
import { colors } from '@/shared/ui/colors'
import { FormulaTableBody } from './TableBody'

// interface DaysTableProps {
// testsTableActions: ReactNode
// }

export const FormulaTable = () => {
  return (
    <Stack
      width={'100%'}
      maxWidth={'397px'}
      flex={1}
      border={`1px solid ${colors.grayTableBorder}`}
    >
      <TableContainer
        sx={{
          borderRadius: 0,
          flex: 1,
          height: '100%',
          maxHeight: '675px',
          boxShadow: 'none',
        }}
        component={Paper}
      >
        <Table size="small" stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ width: '26px', background: colors.bgHoverGray }}
              ></TableCell>
              <TableCell sx={{ background: colors.bgHoverGray }}>
                Исследование
              </TableCell>
              <TableCell sx={{ background: colors.bgHoverGray }}>
                Тест
              </TableCell>
            </TableRow>
          </TableHead>
          <FormulaTableBody />
        </Table>
      </TableContainer>
    </Stack>
  )
}
