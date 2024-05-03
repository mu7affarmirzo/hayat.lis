import { Button, Stack } from '@mui/material'
import { CustomModal } from '@/shared/ui'
import { colors } from '@/shared/ui/colors'
import { FormulaTable } from './FormulaTable'

interface PathologyFormulaModalProps {
  isOpen: boolean
  handleClose: () => void
  handleSubmit: () => void
}

export const PathologyFormulaModal = (props: PathologyFormulaModalProps) => {
  const { handleClose, isOpen } = props

  return (
    <CustomModal
      title="Формула патологии для исследования"
      onClose={handleClose}
      maxWidth={'1137px'}
      open={isOpen}
    >
      <Stack spacing={'10px'} width={'100%'}>
        <Stack direction={'row'} spacing={'10px'}>
          <Stack
            width={'690px'}
            height={'704px'}
            border={`1px solid ${colors.grayTableBorder}`}
            borderRight={'16px solid #F0F0F0'}
          ></Stack>
          <Stack width={'397px'} height={'704px'}>
            <FormulaTable />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing={'8px'}
          justifyContent={'flex-end'}
          py={'8px'}
        >
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              textTransform: 'capitalize',
              boxShadow: 'none',
            }}
            color="inherit"
          >
            Тест формулы
          </Button>
          <Button
            onClick={() => {
              handleClose()
            }}
            variant="contained"
            sx={{
              textTransform: 'capitalize',
              boxShadow: 'none',
            }}
            color="success"
          >
            Сохранить
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              textTransform: 'capitalize',
              boxShadow: 'none',
            }}
            color="inherit"
          >
            Отмена
          </Button>
        </Stack>
      </Stack>
    </CustomModal>
  )
}
