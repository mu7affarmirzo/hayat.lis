import {
  ChevronLeft,
  ChevronRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'

interface PaginationProps {
  current: number
  totalPages?: number
  handleNext?: () => void
  handlePrev?: () => void
  handleStart?: () => void
  handleEnd?: () => void
}

export const TablePagination = (props: PaginationProps) => {
  const {
    current,
    totalPages,
    handleEnd,
    handleNext,
    handlePrev,
    handleStart,
  } = props

  return (
    <Stack direction={'row'}>
      <IconButton onClick={handleStart} sx={{ padding: 0 }}>
        <KeyboardDoubleArrowLeft color="action" />
      </IconButton>
      <IconButton onClick={handlePrev} sx={{ padding: 0 }}>
        <ChevronLeft color="action" />
      </IconButton>
      <Typography textAlign={'center'} minWidth={'130px'}>
        Запись {current} из {totalPages}
      </Typography>
      <IconButton onClick={handleNext} sx={{ padding: 0 }}>
        <ChevronRight color="action" />
      </IconButton>
      <IconButton onClick={handleEnd} sx={{ padding: 0 }}>
        <KeyboardDoubleArrowRight color="action" />
      </IconButton>
    </Stack>
  )
}
