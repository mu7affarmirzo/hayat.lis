import { Box, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { colors } from '@/shared/ui/colors'
import './../table.css'
import { TemporaryRegulationsTableBody } from './TableBody'

export const TemporaryRegulationsTable = () => {
  return (
    <Stack height={'calc(100vh - 132px)'} p={'5px'} width={'100%'}>
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid #5AA4DE`}
      >
        <Typography>Временные регламенты</Typography>
      </Box>
      <Box>
        <TableContainer
          sx={{
            borderRadius: 0,
            minHeight: 'calc(100vh - 494px)',
            maxHeight: 'calc(100vh - 494px)',
            boxShadow: 'none',
            border: `1px solid ${colors.borderLightGray}`,
          }}
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
                <TableCell
                  sx={{ width: '26px' }}
                  className="bg-bgHoverGray"
                ></TableCell>
                <TableCell className="bg-bgHoverGray">Статус</TableCell>
                <TableCell className="bg-bgHoverGray">Включено</TableCell>
                <TableCell className="bg-bgHoverGray">Время(мин.) </TableCell>
              </TableRow>
            </TableHead>
            <TemporaryRegulationsTableBody />
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  )
}
