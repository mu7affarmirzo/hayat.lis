import { Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { colors } from '@/shared/ui/colors'
import './table.css'
import { ResultsTemplateTableBody } from './TableBody'

export const ResultsTemplateTable = () => {
  return (
    <Stack
      border={`1px solid ${colors.darkGray}`}
      borderTop={'none'}
      width={'100%'}
    >
      <TableContainer
        sx={{
          borderRadius: 0,
          minHeight: 300,
          maxHeight: 300,
          boxShadow: 'none',
        }}
        component={Paper}
      >
        <Table size="small" stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ width: '26px', background: colors.bgLightGray }}
              ></TableCell>
              <TableCell sx={{ background: colors.bgLightGray }}>
                Имя поля
              </TableCell>
              <TableCell sx={{ background: colors.bgLightGray }}>
                Результат
              </TableCell>
            </TableRow>
          </TableHead>
          <ResultsTemplateTableBody />
        </Table>
      </TableContainer>
    </Stack>
  )
}
