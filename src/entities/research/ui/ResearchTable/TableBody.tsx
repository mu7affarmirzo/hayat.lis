import { ArrowRight } from '@mui/icons-material'
import { Box, Checkbox, TableCell, TableRow } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import dayjs from 'dayjs'
import { type ReactNode } from 'react'
import { colors } from '@/shared/ui/colors'
import { type UseResearchTable } from '../../model/useResearchTable'
import { ResearchContainerModal } from '../ResearchContainerModal/ResearchContainerModal'
import { ResearchMenuModal } from '../ResearchMenuModal/ResearchMenuModal'

interface ResearchTableProps
  extends Omit<
    UseResearchTable,
    | 'numSelected'
    | 'onSelectAllClick'
    | 'rowCount'
    | 'isValidateBtnActive'
    | 'paginationProps'
  > {
  containerInfoTable?: ReactNode
  isLoadingData?: boolean
}

export const ResearchTableBody = (props: ResearchTableProps) => {
  const {
    isSelected,
    activeRow,
    handleClickRow,
    handleClick,
    currentResearchId,
    handleDoubleClick,
    openMenuModal,
    handleCloseMenuModal,
    handleCloseContainerModal,
    isOpenContainerModal,
    handleOpenContainerModal,
    researchList,
    isLoadingData,
  } = props

  return (
    <>
      <TableBody>
        {isLoadingData && (
          <TableRow>
            <TableCell sx={{ textAlign: 'center' }} colSpan={100}>
              Загрузка...
            </TableCell>
          </TableRow>
        )}
        {researchList?.results?.map((row) => {
          return row?.results?.map((result, index) => {
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
                <TableCell>{}</TableCell>
                <TableCell>{}</TableCell>
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
        })}
      </TableBody>
      <ResearchMenuModal
        openMenuModal={openMenuModal}
        currentResearchId={currentResearchId}
        handleCloseMenuModal={handleCloseMenuModal}
        openContainer={handleOpenContainerModal}
        openResearchLogs={() => {}}
      />
      <ResearchContainerModal
        containerInfoTable={props?.containerInfoTable}
        isOpenContainerModal={isOpenContainerModal}
        currentResearchId={currentResearchId}
        handleCloseContainerModal={handleCloseContainerModal}
        researchList={researchList}
      />
    </>
  )
}
