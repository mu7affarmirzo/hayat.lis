import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { colors } from '@/shared/ui/colors'
import './../table.css'
import { PackagesTableBody } from './TableBody'

export interface PackagesTableProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

export const PackagesTable = (props: PackagesTableProps) => {
  return (
    <TableContainer
      sx={{
        borderRadius: 0,
        minHeight: 525,
        maxHeight: 525,
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
            <TableCell className="bg-bgHoverGray">Код</TableCell>
            <TableCell className="bg-bgHoverGray">Наименование</TableCell>
            <TableCell className="bg-bgHoverGray">Цена</TableCell>
            <TableCell className="bg-bgHoverGray">Описание</TableCell>
            <TableCell className="bg-bgHoverGray">Вкл.</TableCell>
            <TableCell className="bg-bgHoverGray">
              Дата истечения срока г...
            </TableCell>
          </TableRow>
        </TableHead>
        <PackagesTableBody setIsEditing={props.setIsEditing} />
      </Table>
    </TableContainer>
  )
}
