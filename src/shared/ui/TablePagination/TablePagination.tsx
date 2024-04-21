import {
  ChevronLeft,
  ChevronRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'

interface PaginationProps {
  total: number
  current: number
}

export const TablePagination = (props: PaginationProps) => {
  const { current, total } = props
  return (
    <Stack direction={'row'}>
      <IconButton sx={{ padding: 0 }}>
        <ChevronLeft color="action" />
      </IconButton>
      <IconButton sx={{ padding: 0 }}>
        <KeyboardDoubleArrowLeft color="action" />
      </IconButton>
      <Typography textAlign={'center'} minWidth={'130px'}>
        Запись {current} из {total}
      </Typography>
      <IconButton sx={{ padding: 0 }}>
        <ChevronRight color="action" />
      </IconButton>
      <IconButton sx={{ padding: 0 }}>
        <KeyboardDoubleArrowRight color="action" />
      </IconButton>
    </Stack>
  )
}
