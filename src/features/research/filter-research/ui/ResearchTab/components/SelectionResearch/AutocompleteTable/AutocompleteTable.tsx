import { Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
// import { colors } from '@/shared/ui/colors'
import './../table.css'
import { Button as CustomBtn } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { AutocompleteTableBody } from './TableBody'

interface AutocompleteTableInterface {
  setSelectedItem: React.Dispatch<React.SetStateAction<number | undefined>>
  selectedItem?: number
}

export const AutocompleteTable = (props: AutocompleteTableInterface) => {
  const { selectedItem, setSelectedItem } = props

  return (
    <Stack p={'5px'} spacing={'5px'} width={'100%'}>
      <TableContainer
        sx={{
          borderRadius: 0,
          minHeight: 280,
          maxHeight: 280,
          boxShadow: 'none',
        }}
        component={Paper}
      >
        <Table size="small" stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ background: colors.mainBlue }}></TableCell>
              <TableCell sx={{ background: colors.mainBlue }}>Код</TableCell>
              <TableCell sx={{ background: colors.mainBlue }}>
                Наименование
              </TableCell>
            </TableRow>
          </TableHead>
          <AutocompleteTableBody
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        </Table>
      </TableContainer>
      <Stack alignItems={'flex-end'}>
        <CustomBtn
          sx={{
            textTransform: 'uppercase',
            width: 'max-content',
            height: 26,
          }}
          onClick={() => {
            setSelectedItem(undefined)
          }}
        >
          Очистить
        </CustomBtn>
      </Stack>
    </Stack>
  )
}
