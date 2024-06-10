import { Box, Checkbox, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { type ReactNode } from 'react'
import { type IPatientsRoot } from '@/shared/types'
import { TablePagination } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import './../table.css'
import { useOrdersTable } from '../../model/useOrdersTable'
import { OrdersTableBody } from './TableBody'

interface OrderTableProps {
  containerInfoTable: ReactNode
  activeRow: number | undefined
  setActiveRow: React.Dispatch<React.SetStateAction<number | undefined>>
  data?: IPatientsRoot
  isLoading?: boolean
}
export const OrdersTable = (props: OrderTableProps) => {
  const { activeRow, setActiveRow, data, isLoading } = props

  const {
    numSelected,
    onSelectAllClick,
    rowCount,
    isValidateBtnActive,
    ...restProps
  } = useOrdersTable({ activeRow, setActiveRow, data })

  return (
    <Stack
      p={'5px'}
      spacing={'5px'}
      // overflow={'auto'}
      width={'100%'}
      sx={{ maxWidth: 'calc(100vw - 310px)' }}
      border={`1px solid ${colors.borderGray}`}
    >
      <Typography>Заказы</Typography>
      <Box>
        <TableContainer
          sx={{ borderRadius: 0, minHeight: 611, maxHeight: 611 }}
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
                <TableCell className="bg-mainBlue" padding="checkbox">
                  <Checkbox
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                    inputProps={{
                      'aria-label': 'select all desserts',
                    }}
                  />
                </TableCell>
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
            <OrdersTableBody
              containerInfoTable={props.containerInfoTable}
              isLoading={isLoading}
              {...restProps}
            />
          </Table>
        </TableContainer>
      </Box>
      <Box border="1px solid #0000001A">
        <TablePagination current={3} total={1022} />
      </Box>
    </Stack>
  )
}
