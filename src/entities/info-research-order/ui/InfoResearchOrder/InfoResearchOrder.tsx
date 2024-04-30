import { Box, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { colors } from '@/shared/ui/colors'
import './../table.css'
import { rows } from '../../model/rows'

export const InfoResearchOrder = () => {
  return (
    <Stack
      p={'5px'}
      spacing={'5px'}
      width={'100%'}
      sx={{ maxWidth: '290px', flex: 1 }}
    >
      <Stack
        direction={'row'}
        spacing={'20px'}
        p={'4px 10px'}
        sx={{ background: colors.bgLightGray }}
      >
        <Typography variant={'subtitle2'}>Инфо о заказе</Typography>
      </Stack>
      <Box
        style={{ overflowX: 'auto' }}
        borderBottom={`1px solid ${colors.borderGray}`}
      >
        <TableContainer
          sx={{ borderRadius: 0, maxHeight: '126px' }}
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
                <TableCell colSpan={2} className="bg-mainBlue">
                  Прочее
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  )
}
