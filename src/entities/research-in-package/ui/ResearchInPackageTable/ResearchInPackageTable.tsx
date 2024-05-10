import { Box, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { type ReactNode } from 'react'
import { colors } from '@/shared/ui/colors'
import './../table.css'
import { ResearchInPackageTableBody } from './TableBody'

interface ResearchInPackageTableProps {
  packagesTableActions: ReactNode
}

export const ResearchInPackageTable = (props: ResearchInPackageTableProps) => {
  return (
    <Stack flex={1} width={'100%'}>
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid #5AA4DE`}
      >
        <Typography>Исследования в пакете</Typography>
      </Box>
      <Box>
        <TableContainer
          sx={{
            borderRadius: 0,
            flex: 1,
            height: '191px',
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
                <TableCell className="bg-bgHoverGray">Ветеринарное</TableCell>
                <TableCell className="bg-bgHoverGray">Биоматериал</TableCell>
                <TableCell className="bg-bgHoverGray">Цена</TableCell>
              </TableRow>
            </TableHead>
            <ResearchInPackageTableBody />
          </Table>
        </TableContainer>
      </Box>
      <Box mt={'10px'}>{props.packagesTableActions}</Box>
    </Stack>
  )
}
