import { Close } from '@mui/icons-material'
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { type ReactNode } from 'react'
import { colors } from '@/shared/ui/colors'
import './../table.css'
import { ContainerTypesTableBody } from './TableBody'

interface ContainerTypesProps {
  packagesTableActions: ReactNode
}

export const ContainerTypesTable = (props: ContainerTypesProps) => {
  return (
    <Stack height={'calc(100vh - 132px)'} p={'5px'} width={'100%'}>
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid #5AA4DE`}
      >
        <Typography>Виды контейнеров</Typography>
      </Box>
      <Box>
        <TableContainer
          sx={{
            borderRadius: 0,
            minHeight: 'calc(100vh - 200px)',
            maxHeight: 'calc(100vh - 200px)',
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
                <TableCell className="bg-bgHoverGray">Наименование</TableCell>
                <TableCell className="bg-bgHoverGray">Сокр. наим.</TableCell>
                <TableCell className="bg-bgHoverGray">Емкость</TableCell>
                <TableCell className="bg-bgHoverGray">Цвет</TableCell>
                <TableCell className="bg-bgHoverGray">Архив</TableCell>
                <TableCell className="bg-bgHoverGray">Биоматериал</TableCell>
                <TableCell className="bg-bgHoverGray">Аликвотируемый</TableCell>
                <TableCell className="bg-bgHoverGray">Группа</TableCell>
                <TableCell className="bg-bgHoverGray">
                  Принадлежит группе
                </TableCell>
              </TableRow>
            </TableHead>
            <ContainerTypesTableBody />
          </Table>
        </TableContainer>
      </Box>
      <Stack
        direction={'row'}
        border={`1px solid ${colors.borderLightGray}`}
        borderTop={'none'}
        sx={{ background: colors.bgHoverGray }}
        p={'3px 5px'}
        spacing={'10px'}
      >
        <IconButton sx={{ p: '3px' }}>
          <Close sx={{ color: 'black' }} />
        </IconButton>
        <FormControlLabel
          control={<Checkbox sx={{ py: 0, pl: 0 }} defaultChecked />}
          label="[Вкл.] = 'Отмечено'"
        />
      </Stack>
      <Box mt={'10px'}>{props.packagesTableActions}</Box>
    </Stack>
  )
}
