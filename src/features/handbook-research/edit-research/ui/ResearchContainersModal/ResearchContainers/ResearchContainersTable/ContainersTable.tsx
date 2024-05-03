import { Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { colors } from '@/shared/ui/colors'
import './table.css'
import { ContainersTableBody } from './TableBody'

export const ContainersTable = () => {
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
                Биоматериал
              </TableCell>
              <TableCell sx={{ background: colors.bgLightGray }}>
                Обьем
              </TableCell>
              <TableCell sx={{ background: colors.bgLightGray }}>
                Аликвотируемость
              </TableCell>
            </TableRow>
          </TableHead>
          <ContainersTableBody />
        </Table>
      </TableContainer>
    </Stack>
  )
}
