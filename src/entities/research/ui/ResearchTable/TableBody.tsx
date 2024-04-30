import { ArrowRight } from '@mui/icons-material'
import { Box, Checkbox, TableCell, TableRow } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import { type ReactNode } from 'react'
import { colors } from '@/shared/ui/colors'
import { rows } from '../../model/rows'
import { useResearchTable } from '../../model/useResearchTable'
import { ResearchContainerModal } from '../ResearchContainerModal/ResearchContainerModal'
import { ResearchMenuModal } from '../ResearchMenuModal/ResearchMenuModal'

interface ResearchTableProps {
  containerInfoTable: ReactNode
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
  } = useResearchTable(rows)

  return (
    <>
      <TableBody>
        {rows.map((row, index) => {
          const isItemSelected = isSelected(row.id)
          const labelId = `enhanced-table-checkbox-${index}`

          return (
            <TableRow
              hover
              onDoubleClick={() => {
                handleDoubleClick(row.id)
              }}
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
      <ResearchMenuModal
        openMenuModal={openMenuModal}
        currentResearchId={currentResearchId}
        handleCloseMenuModal={handleCloseMenuModal}
        openContainer={handleOpenContainerModal}
        openResearchLogs={() => {}}
      />
      <ResearchContainerModal
        containerInfoTable={props.containerInfoTable}
        isOpenContainerModal={isOpenContainerModal}
        currentResearchId={currentResearchId}
        handleCloseContainerModal={handleCloseContainerModal}
      />
    </>
  )
}
