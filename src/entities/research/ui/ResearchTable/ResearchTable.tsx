import { Box, Checkbox, Stack, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { type ReactNode } from 'react'
import { type IPatientsRoot } from '@/shared/types'
import { Button, Icon, TablePagination } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import './../table.css'
import { useResearchTable } from '../../model/useResearchTable'
import { ResearchTableBody } from './TableBody'

interface ResearchTableProps {
  containerInfoTable: ReactNode
  samplingConditionsSlot: ReactNode
  activeRow: number | undefined
  setActiveRow: React.Dispatch<React.SetStateAction<number | undefined>>
  data?: IPatientsRoot
  isLoadingData?: boolean
  choice?: string
}

export const ResearchTable = (props: ResearchTableProps) => {
  const { activeRow, setActiveRow, data, isLoadingData, choice } = props
  const {
    numSelected,
    onSelectAllClick,
    rowCount,
    isValidateBtnActive,
    ...restProps
  } = useResearchTable({ activeRow, setActiveRow, data, choice })

  return (
    <Stack
      p={'5px'}
      spacing={'5px'}
      width={'100%'}
      border={`1px solid ${colors.borderGray}`}
    >
      <Stack direction={'row'} alignItems={'center'}>
        <Typography sx={{ width: 'max-content', whiteSpace: 'nowrap' }}>
          Все исследования
        </Typography>
        <Stack
          direction="row"
          width="100%"
          justifyContent={'center'}
          spacing={'10px'}
        >
          <Button sx={{ width: 'max-content' }}>
            <Icon type="circle-check" />
          </Button>
          <Button
            disabled={!isValidateBtnActive}
            onClick={restProps.handleValidation}
            color={isValidateBtnActive ? 'success' : undefined}
            sx={{
              width: 'max-content',
              background: isValidateBtnActive ? '#9FD5A1' : colors.bgLightGray,
            }}
          >
            <Icon type="check" />
          </Button>
          {props.samplingConditionsSlot}
        </Stack>
      </Stack>
      <Box>
        <TableContainer
          sx={{ borderRadius: 0, minHeight: 611, maxHeight: 611 }}
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
                <TableCell className="bg-mainBlue"></TableCell>
                <TableCell className="bg-mainBlue" padding="checkbox">
                  <Checkbox
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    // checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                    inputProps={{
                      'aria-label': 'select all desserts',
                    }}
                  />
                </TableCell>
                <TableCell className="bg-mainBlue">Дата</TableCell>
                <TableCell className="bg-mainBlue">Ф И О</TableCell>
                <TableCell className="bg-mainBlue">Дата рождения</TableCell>
                <TableCell className="bg-mainBlue">Лаб. №</TableCell>
                <TableCell className="bg-mainBlue">Пол</TableCell>
                <TableCell className="bg-mainBlue">Заказ №</TableCell>
                <TableCell className="bg-mainBlue">Регистратор</TableCell>
                <TableCell className="bg-mainBlue">Направитель</TableCell>
                <TableCell className="bg-mainBlue">Пункт</TableCell>
                <TableCell className="bg-mainBlue">Долг</TableCell>
                <TableCell className="bg-mainBlue">Плательщик</TableCell>
                <TableCell className="bg-mainBlue">Отделение</TableCell>
                <TableCell className="bg-mainBlue">Патология</TableCell>
                <TableCell className="bg-mainBlue">Арх.Штат.AutoMate</TableCell>
                <TableCell className="bg-mainBlue">Дата принятия</TableCell>
                <TableCell className="bg-mainBlue"></TableCell>
              </TableRow>
            </TableHead>
            <ResearchTableBody
              containerInfoTable={props.containerInfoTable}
              isLoadingData={isLoadingData}
              {...restProps}
            />
          </Table>
        </TableContainer>
      </Box>
      <Box border="1px solid #0000001A">
        <TablePagination current={3} total={1022} />
      </Box>
    </Stack>
  )
}
