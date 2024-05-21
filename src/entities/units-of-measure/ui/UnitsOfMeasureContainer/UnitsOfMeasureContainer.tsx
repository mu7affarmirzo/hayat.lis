import { Box, Stack, Typography } from '@mui/material'
import { type PropsWithChildren, type ReactNode } from 'react'
import { colors } from '@/shared/ui/colors'
import './../table.css'

interface UnitsOfMeasureProps extends PropsWithChildren {
  packagesTableActions: ReactNode
}

export const UnitsOfMeasureContainer = (props: UnitsOfMeasureProps) => {
  return (
    <Stack height={'calc(100vh - 84px)'} p={'5px'} width={'100%'}>
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid #5AA4DE`}
      >
        <Typography>Единицы измерений</Typography>
      </Box>
      {props.children}
      <Box mt={'10px'}>{props.packagesTableActions}</Box>
    </Stack>
  )
}
