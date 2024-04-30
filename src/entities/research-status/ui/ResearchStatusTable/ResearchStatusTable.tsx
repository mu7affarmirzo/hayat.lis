import { Box, Stack, Typography } from '@mui/material'
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
import { rows } from '../../model/rows'
import { useResearchStatusTable } from '../../model/useResearchStatusTable'

export const ResearchStatusTable = () => {
  const { isSelected, activeRow } = useResearchStatusTable(rows)

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
        <Typography flex={1} variant={'subtitle2'}>
          1459
        </Typography>
        <Stack flex={1} direction={'row'} spacing={'5px'}>
          <Typography variant={'body2'}>Статус исследования: </Typography>
          <Typography variant={'subtitle2'}>Валидировано</Typography>
        </Stack>
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
                <TableCell className="bg-mainBlue">Код</TableCell>
                <TableCell className="bg-mainBlue">Тест</TableCell>
                <TableCell className="bg-mainBlue">Ед.изм.</TableCell>
                <TableCell className="bg-mainBlue">Норма</TableCell>
                <TableCell className="bg-mainBlue">Результат</TableCell>
                <TableCell className="bg-mainBlue">Критическая норма</TableCell>
                <TableCell className="bg-mainBlue">Статус</TableCell>
                <TableCell className="bg-mainBlue">Группа</TableCell>
                <TableCell className="bg-mainBlue"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.id)

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
