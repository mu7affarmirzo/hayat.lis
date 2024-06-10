import { ArrowRight } from '@mui/icons-material'
import { Box, Checkbox, TableCell, TableRow } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import dayjs from 'dayjs'
import { type ReactNode } from 'react'
import { colors } from '@/shared/ui/colors'
import { type UseOrdersTable } from '../../model/useOrdersTable'
import { OrderContainerModal } from '../OrderContainerModal/OrderContainerModal'
import { OrderMenuModal } from '../OrderMenuModal/OrderMenuModal'

interface OrderTableProps
  extends Omit<
    UseOrdersTable,
    'numSelected' | 'onSelectAllClick' | 'rowCount' | 'isValidateBtnActive'
  > {
  containerInfoTable: ReactNode
  isLoading?: boolean
}

export const OrdersTableBody = (props: OrderTableProps) => {
  const {
    isSelected,
    activeRow,
    handleClickRow,
    handleClick,
    currentOrdersId,
    handleDoubleClick,
    openMenuModal,
    handleCloseMenuModal,
    handleCloseContainerModal,
    isOpenContainerModal,
    handleOpenContainerModal,
    ordersList,
    isLoading,
  } = props

  return (
    <>
      <TableBody>
        {isLoading ? (
          <TableRow>
            <TableCell sx={{ textAlign: 'center' }} colSpan={100}>
              Загрузка...
            </TableCell>
          </TableRow>
        ) : (
          ordersList?.map((row, index) => {
            return row.results.map((result, index) => {
              const isItemSelected = isSelected(result.id)
              const labelId = `enhanced-table-checkbox-${index}`
              return (
                <TableRow
                  hover
                  onDoubleClick={() => {
                    handleDoubleClick(row.lab)
                  }}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  sx={{ cursor: 'pointer' }}
                  key={result.id}
                  selected={isItemSelected || activeRow === result.id}
                >
                  <TableCell
                    onClick={() => handleClickRow(result.id)}
                    sx={{ background: colors.bgLightGray }}
                  >
                    <Box width={'20px'}>
                      {activeRow === result.id && (
                        <ArrowRight width={'10px'} color="action" />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell padding="checkbox">
                    <Checkbox
                      onClick={(event) => handleClick(event, result.id)}
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {dayjs(new Date(row.created_at)).format('YYYY-MM-DD')}
                  </TableCell>
                  <TableCell>{row.branch_name}</TableCell>
                  <TableCell>
                    {dayjs(new Date(row.patient.date_of_birth)).format(
                      'YYYY-MM-DD'
                    )}
                  </TableCell>
                  <TableCell>{result.id}</TableCell>
                  <TableCell>{row.patient.gender}</TableCell>
                  <TableCell>{row.order_number}</TableCell>
                  <TableCell>{row.patient.organization}</TableCell>
                  <TableCell>{row.patient.doc_number}</TableCell>
                  <TableCell>{0}</TableCell>
                  <TableCell>{row.patient.organization}</TableCell>
                  <TableCell>
                    {row.patient.f_name + ' ' + row.patient.l_name}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )
            })
          })
        )}
      </TableBody>
      <OrderMenuModal
        openMenuModal={openMenuModal}
        currentOrderId={currentOrdersId}
        handleCloseMenuModal={handleCloseMenuModal}
        openContainer={handleOpenContainerModal}
        openOrderLogs={() => {}}
      />
      <OrderContainerModal
        containerInfoTable={props.containerInfoTable}
        isOpenContainerModal={isOpenContainerModal}
        currentOrderId={currentOrdersId}
        handleCloseContainerModal={handleCloseContainerModal}
      />
    </>
  )
}
