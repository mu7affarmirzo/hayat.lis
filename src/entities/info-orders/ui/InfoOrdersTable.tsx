import { ArrowRight } from '@mui/icons-material'
import { Box, Checkbox, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { TablePagination } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import './table.css'
import { rows } from '../model/rows'
import { useInfoOrdersTable } from '../model/useInfoOrdersTable'

export const InfoOrdersTable = () => {
  const { isSelected, handleClick, activeRow, handleClickRow } =
    useInfoOrdersTable(rows)

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
          9383
        </Typography>
      </Stack>
      <Box style={{ overflowX: 'auto' }}>
        <TableContainer
          sx={{ borderRadius: 0, maxHeight: 200 }}
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
                <TableCell className="bg-mainBlue">Дата</TableCell>
                <TableCell className="bg-mainBlue">Ф И О</TableCell>
                <TableCell className="bg-mainBlue">Дата рождения</TableCell>
                <TableCell className="bg-mainBlue">Лаб. №</TableCell>
                <TableCell className="bg-mainBlue">Пол</TableCell>
                <TableCell className="bg-mainBlue">Заказ №</TableCell>
                <TableCell className="bg-mainBlue">Регистратор</TableCell>
                <TableCell className="bg-mainBlue">Направитель</TableCell>
                <TableCell className="bg-mainBlue">Пункт</TableCell>
                <TableCell className="bg-mainBlue">Долг</TableCell>
                <TableCell className="bg-mainBlue">Плательщик</TableCell>
                <TableCell className="bg-mainBlue">Отделение</TableCell>
                <TableCell className="bg-mainBlue">Патология</TableCell>
                <TableCell className="bg-mainBlue">Арх.Штат.AutoMate</TableCell>
                <TableCell className="bg-mainBlue">Дата принятия</TableCell>
                <TableCell className="bg-mainBlue"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id)
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    sx={{ cursor: 'pointer' }}
                    key={row.id}
                    selected={isItemSelected || activeRow === row.id}
                  >
                    <TableCell
                      onClick={() => handleClickRow(row.id)}
                      sx={{ background: colors.bgLightGray }}
                    >
                      <Box width={'20px'}>
                        {activeRow === row.id && (
                          <ArrowRight width={'10px'} color="action" />
                        )}
                      </Box>
                    </TableCell>
                    <TableCell padding="checkbox">
                      <Checkbox
                        onClick={(event) => handleClick(event, row.id)}
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.birthday}</TableCell>
                    <TableCell>{row.labNumber}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.orderNumber}</TableCell>
                    <TableCell>{row.registrar}</TableCell>
                    <TableCell>{row.director}</TableCell>
                    <TableCell>{row.debt}</TableCell>
                    <TableCell>{row.payer}</TableCell>
                    <TableCell>{row.branch}</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box border="1px solid #0000001A">
        <TablePagination current={3} total={1022} />
      </Box>
    </Stack>
  )
}
