import { ArrowRight } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'
import { CustomModal, TablePagination } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import './table.css'
import { rows } from '../model/rows'
import { useContainerTable } from '../model/useContainerTable'

export const ContainerInfoTable = () => {
  const { activeRow, handleClickRow } = useContainerTable(rows)
  const [open, setOpen] = useState(false)
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
              {rows.map((row) => (
                <TableRow
                  hover
                  role="checkbox"
                  aria-checked={activeRow === row.id}
                  tabIndex={-1}
                  sx={{ cursor: 'pointer' }}
                  key={row.id}
                  selected={activeRow === row.id}
                >
                  <TableCell
                    onClick={() => handleClickRow(row.id)}
                    sx={{ background: colors.bgLightGray, maxWidth: '20px' }}
                  >
                    <Box width={'20px'}>
                      {activeRow === row.id && (
                        <ArrowRight width={'10px'} color="action" />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.birthday}</TableCell>
                  <TableCell>{row.labNumber}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>
                    <Stack>
                      <IconButton onClick={() => setOpen(true)}>cl</IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {false && (
        <Box border="1px solid #0000001A">
          <TablePagination current={3} total={1022} />
        </Box>
      )}
      <CustomModal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <p>Modal</p>
      </CustomModal>
    </Stack>
  )
}
