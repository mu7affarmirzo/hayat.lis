import { ArrowRight } from '@mui/icons-material'
import { Box, Checkbox, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import dayjs from 'dayjs'
import { colors } from '@/shared/ui/colors'
import './table.css'
import { useOrderInfo } from '../model/useOrderInfo'

interface InfoTableProps {
  orderId?: number
}

export const InfoOrdersTable = (props: InfoTableProps) => {
  const { orderId } = props
  const { data, isLoadingData, activeRow, isSelected, handleClickRow } =
    useOrderInfo({
      orderId,
    })

  return (
    <Stack
      p={'5px'}
      spacing={'5px'}
      width={'100%'}
      sx={{ maxWidth: 'calc(100vw - 310px)', flex: 1 }}
      border={`1px solid ${colors.borderGray}`}
    >
      <Stack
        direction={'row'}
        spacing={'20px'}
        p={'4px 10px'}
        sx={{ background: colors.bgLightGray }}
      >
        <Typography variant={'subtitle2'}>Информация о заказе</Typography>
        <Typography variant={'subtitle2'} sx={{ color: colors.mainWarning }}>
          {orderId}
        </Typography>
      </Stack>
      <Box style={{ overflowX: 'auto', height: '100%' }}>
        <TableContainer
          sx={{ borderRadius: 0, height: '100%' }}
          component={Paper}
        >
          <Table
            size="small"
            stickyHeader
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell className="bg-mainBlue"></TableCell>
                <TableCell className="bg-mainBlue">Печать</TableCell>
                <TableCell className="bg-mainBlue">Код</TableCell>
                <TableCell className="bg-mainBlue">Исследование</TableCell>
                <TableCell className="bg-mainBlue">Биоматериал</TableCell>
                <TableCell className="bg-mainBlue">Cito</TableCell>
                <TableCell className="bg-mainBlue">Постановка</TableCell>
                <TableCell className="bg-mainBlue">Дата постановки</TableCell>
                <TableCell className="bg-mainBlue">Пакет</TableCell>
                <TableCell className="bg-mainBlue">Готовность</TableCell>
                <TableCell className="bg-mainBlue">Валидация</TableCell>
                <TableCell className="bg-mainBlue">Долг</TableCell>
                <TableCell className="bg-mainBlue">Плательщик</TableCell>
                <TableCell className="bg-mainBlue">Отделение</TableCell>
                <TableCell className="bg-mainBlue"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoadingData && (
                <TableRow>
                  <TableCell sx={{ textAlign: 'center' }} colSpan={100}>
                    Загрузка...
                  </TableCell>
                </TableRow>
              )}
              {orderId &&
                data?.[0]?.results?.map((result, index) => {
                  const isItemSelected = isSelected(result.id)

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      sx={{ cursor: 'pointer' }}
                      key={result.id}
                      selected={isItemSelected || activeRow === result.id}
                    >
                      <TableCell
                        onClick={() => handleClickRow(result.id)}
                        sx={{
                          background: colors.bgLightGray,
                          width: '25px',
                        }}
                      >
                        <Box width={'20px'}>
                          {activeRow === result.id && (
                            <ArrowRight width={'10px'} color="action" />
                          )}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Stack alignItems={'center'} justifyContent={'center'}>
                          <Checkbox sx={{ padding: 0 }} color="primary" />
                        </Stack>
                      </TableCell>
                      <TableCell component="th" scope="result">
                        {result.container_code}
                      </TableCell>
                      <TableCell>{result.ordered_lab_research}</TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <Stack
                          width={'70px'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <Checkbox sx={{ padding: 0 }} color="primary" />
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          width={'100px'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <Checkbox sx={{ padding: 0 }} color="primary" />
                        </Stack>
                      </TableCell>
                      <TableCell>
                        {dayjs(result.created_at).format('DD-MM-YYYY')}
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <Stack
                          width={'120px'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <Checkbox sx={{ padding: 0 }} color="primary" />
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Stack
                          width={'110px'}
                          alignItems={'center'}
                          justifyContent={'center'}
                        >
                          <Checkbox sx={{ padding: 0 }} color="primary" />
                        </Stack>
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        {data?.[0]?.patient.f_name ?? ''}{' '}
                        {data?.[0]?.patient.mid_name ?? ''}{' '}
                        {data?.[0]?.patient.l_name ?? ''}
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
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
