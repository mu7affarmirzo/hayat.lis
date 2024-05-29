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
import { useResearchItemQuery } from '../../api/researchListApi'
import { rows } from '../../model/rows'
import { useResearchStatusTable } from '../../model/useResearchStatusTable'

interface ResearchStatusProps {
  orderId?: number
}

export const ResearchStatusTable = (props: ResearchStatusProps) => {
  const { orderId } = props
  const { isSelected, activeRow } = useResearchStatusTable(rows)
  const { data } = useResearchItemQuery(
    { orderId: `${orderId}` },
    { skip: !orderId }
  )
  console.log({ orderId, data })

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
          {orderId}
        </Typography>
        {orderId && (
          <Stack flex={1} direction={'row'} spacing={'5px'}>
            <Typography variant={'body2'}>Статус исследования: </Typography>
            <Typography variant={'subtitle2'}>
              {data?.[0]?.results[0].test_status}
            </Typography>
          </Stack>
        )}
      </Stack>
      <Stack height={'100%'} justifyContent={'space-between'}>
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
                  <TableCell className="bg-mainBlue">
                    Критическая норма
                  </TableCell>
                  <TableCell className="bg-mainBlue">Статус</TableCell>
                  <TableCell className="bg-mainBlue">Группа</TableCell>
                  <TableCell className="bg-mainBlue"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderId &&
                  data?.map((row, index) => {
                    return row.results.map((result) => {
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
                          <TableCell component="th" scope="result">
                            {result.container_code}
                          </TableCell>
                          <TableCell>{result.lab_research_test}</TableCell>
                          <TableCell>{result.test_status}</TableCell>
                          <TableCell>{`{norma}`}</TableCell>
                          <TableCell>{result.test_status}</TableCell>
                          <TableCell>{'result.status'}</TableCell>
                          <TableCell>{'row?.patient.patient_group'}</TableCell>
                          <TableCell>{row?.patient.is_active}</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      )
                    })
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box justifySelf={'flex-end'} border="1px solid #0000001A">
          <TablePagination current={3} total={1022} />
        </Box>
      </Stack>
    </Stack>
  )
}
