import { Close } from '@mui/icons-material'
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { type ReactNode, type PropsWithChildren } from 'react'
import { colors } from '@/shared/ui/colors'

interface PackagesTableProps extends PropsWithChildren {
  packagesTableActions: ReactNode
}

export const PackagesContainer = (props: PackagesTableProps) => {
  return (
    <Stack width={'100%'}>
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid #5AA4DE`}
      >
        <Typography>Пакеты</Typography>
      </Box>
      <Box>{props.children}</Box>
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
