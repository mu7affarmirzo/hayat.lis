import { ArrowRight } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import dayjs from 'dayjs'
import { type Result, type IPatientsRoot } from '@/shared/types'
import { TablePagination } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import './table.css'
import { rows } from '../model/rows'
import { useContainerTable } from '../model/useContainerTable'

interface TableProps {
  editQrSlot: (props: {
    containerId: number
    id: number
    container_code: string
  }) => JSX.Element
  resultsList?: IPatientsRoot
}

export const ContainerInfoTable = (props: TableProps) => {
  const { editQrSlot: EditQrSlot, resultsList } = props
  const { activeRow, handleClickRow } = useContainerTable(rows)

  return (
    <Stack spacing={'5px'} width={'100%'} sx={{ flex: 1 }}>
      <Box style={{ overflowX: 'auto', width: '100%' }}>
        <TableContainer
          sx={{ borderRadius: 0, maxHeight: 425, width: '100%' }}
          component={Paper}
        >
          <Table
            size="small"
            stickyHeader
            sx={{ width: '100%' }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ backgroundColor: colors.mainBlue }}
                ></TableCell>
                <TableCell sx={{ backgroundColor: colors.mainBlue }}>
                  Наименование
                </TableCell>
                <TableCell sx={{ backgroundColor: colors.mainBlue }}>
                  Биомат.
                </TableCell>
                <TableCell sx={{ backgroundColor: colors.mainBlue }}>
                  ШтрихКод
                </TableCell>
                <TableCell sx={{ backgroundColor: colors.mainBlue }}>
                  Емкость
                </TableCell>
                <TableCell sx={{ backgroundColor: colors.mainBlue }}>
                  Дата взятия
                </TableCell>
                <TableCell sx={{ backgroundColor: colors.mainBlue }}>
                  Действия
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resultsList?.map((row) => {
                return row.results.map((result: Result) => (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={activeRow === result.id}
                    tabIndex={-1}
                    sx={{ cursor: 'pointer' }}
                    key={result.id}
                    selected={activeRow === result.id}
                  >
                    <TableCell
                      onClick={() => handleClickRow(result.container)}
                      sx={{ background: colors.bgLightGray, maxWidth: '20px' }}
                    >
                      <Box width={'20px'}>
                        {activeRow === result.id && (
                          <ArrowRight width={'10px'} color="action" />
                        )}
                      </Box>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {result.result}
                    </TableCell>
                    <TableCell>{result.ordered_lab_research}</TableCell>
                    <TableCell>{result.container_code}</TableCell>
                    <TableCell>{result.lab_research_test}</TableCell>
                    <TableCell>
                      {dayjs(result.created_at).format('YYYY-MM-DD')}
                    </TableCell>
                    <TableCell>
                      <EditQrSlot
                        id={result.id}
                        container_code={result.container_code}
                        containerId={result.container}
                      />
                    </TableCell>
                  </TableRow>
                ))
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {false && (
        <Box border="1px solid #0000001A">
          <TablePagination current={3} total={1022} />
        </Box>
      )}
    </Stack>
  )
}
