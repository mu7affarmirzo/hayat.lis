import { ArrowRight } from '@mui/icons-material'
import { Box, TableCell, TableRow } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import { useAutocompleteTable } from '@/features/research/filter-research/model/useAutocompleteTable'
import { rows } from '@/shared/model/rows'
import { colors } from '@/shared/ui/colors'

interface TableBodyProps {
  setSelectedItem: React.Dispatch<React.SetStateAction<number | undefined>>
  selectedItem: undefined | number
}

export const AutocompleteTableBody = (props: TableBodyProps) => {
  const { selectedItem, setSelectedItem } = props
  const { activeRow, handleClickRow } = useAutocompleteTable(selectedItem)

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
                onClick={() => {
                  handleClickRow(row.id)
                  setSelectedItem(row.id)
                }}
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
            </TableRow>
          )
        })}
      </TableBody>
    </>
  )
}
