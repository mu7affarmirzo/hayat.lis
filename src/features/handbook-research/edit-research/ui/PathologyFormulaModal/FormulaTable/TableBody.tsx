import { TableCell, TableRow } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import { rows } from '../../../model/rows'

export const FormulaTableBody = () => {
  // const { activeRow, handleClickRow } = useDaysTable()

  return (
    <>
      <TableBody>
        {[...rows, ...rows, ...rows, ...rows, ...rows].map((row, index) => {
          return (
            <TableRow
              hover
              role="checkbox"
              // aria-checked={activeRow === row.id}
              tabIndex={-1}
              sx={{ cursor: 'pointer' }}
              key={index}
              // selected={activeRow === row.id}
            >
              <TableCell component="th" scope="row"></TableCell>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </>
  )
}
