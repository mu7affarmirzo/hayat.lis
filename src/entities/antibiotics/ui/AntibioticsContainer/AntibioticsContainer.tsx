import { Box, Stack, Typography } from '@mui/material'
import { type PropsWithChildren, type ReactNode } from 'react'
import { colors } from '@/shared/ui/colors'
import './../table.css'

interface AntibioticsProps extends PropsWithChildren {
  packagesTableActions: ReactNode
}

export const AntibioticsContainer = (props: AntibioticsProps) => {
  return (
    <Stack height={'calc(100vh - 132px)'} p={'5px'} width={'100%'}>
      <Box
        sx={{ backgroundColor: colors.mainBlue }}
        width="100%"
        height="30px"
        p={'5px'}
        border={`1px solid #5AA4DE`}
      >
        <Typography>Антибиотики</Typography>
      </Box>
      <Box>{props.children}</Box>
      <Box mt={'10px'}>{props.packagesTableActions}</Box>
    </Stack>
  )
}
