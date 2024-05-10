import { ArrowRight } from '@mui/icons-material'
import { Box, Checkbox, TableCell, TableRow } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import { rows } from '@/shared/model/rows'
import { colors } from '@/shared/ui/colors'
import { usePackageTable } from '../../model/usePackageTable'

export const PackagesTableBody = () => {
  const { activeRow, handleClickRow } = usePackageTable()

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
                {row.date}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.birthday}</TableCell>
              <TableCell>{row.labNumber}</TableCell>
              <TableCell>
                <Checkbox sx={{ p: 0 }} />
              </TableCell>
              <TableCell>{row.labNumber}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </>
  )
}
