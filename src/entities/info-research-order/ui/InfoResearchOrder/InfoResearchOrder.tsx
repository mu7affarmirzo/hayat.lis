import { Box, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import dayjs from 'dayjs'
import { type IPatientRoot } from '@/shared/types'
import { colors } from '@/shared/ui/colors'
import './../table.css'

interface InfoOrderProps {
  order?: IPatientRoot
  orderId?: number
}

export const InfoResearchOrder = (props: InfoOrderProps) => {
  const { order, orderId } = props

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
      {orderId && (
        <Box
          style={{ overflowX: 'auto', height: '100%' }}
          borderBottom={`1px solid ${colors.borderGray}`}
        >
          <TableContainer
            sx={{ borderRadius: 0, height: '100%' }}
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
                <TableRow hover tabIndex={-1}>
                  <TableCell>ФИО</TableCell>
                  <TableCell component="th" scope="row">
                    {order?.patient.f_name ?? ''}{' '}
                    {order?.patient.mid_name ?? ''}{' '}
                    {order?.patient.l_name ?? ''}
                  </TableCell>
                </TableRow>
                <TableRow hover tabIndex={-1}>
                  <TableCell>Дата рождения</TableCell>
                  <TableCell component="th" scope="row">
                    {dayjs(order?.patient.date_of_birth).format('DD.MM.YYYY')}
                  </TableCell>
                </TableRow>
                <TableRow hover tabIndex={-1}>
                  <TableCell>Возраст</TableCell>
                  <TableCell component="th" scope="row">
                    {new Date().getFullYear() -
                      +dayjs(order?.patient.date_of_birth).format('YYYY')}
                  </TableCell>
                </TableRow>
                <TableRow hover tabIndex={-1}>
                  <TableCell>Пол</TableCell>
                  <TableCell component="th" scope="row">
                    {order?.patient.gender}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Stack>
  )
}
