import { ArrowRight } from '@mui/icons-material'
import { Box, TableCell, TableRow } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import { rows } from '@/shared/model/rows'
import { colors } from '@/shared/ui/colors'
import { useAntibioticsTable } from '../../model/useAntibioticsTable'

export const AntibioticsTableBody = () => {
  const { activeRow, handleClickRow } = useAntibioticsTable()

  return (
    <>
      <TableBody>
        {rows.map((row) => {
          return (
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
                sx={{ background: colors.bgLightGray, width: '26px' }}
              >
                <Box width={'20px'}>
                  {activeRow === row.id && (
                    <ArrowRight width={'10px'} color="action" />
                  )}
                </Box>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.director}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </>
  )
}
