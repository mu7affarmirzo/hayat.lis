import { Box, Stack } from '@mui/material'
import { type PropsWithChildren, type ReactNode } from 'react'
import './../table.css'

interface ContainerTypesProps extends PropsWithChildren {
  packagesTableActions: ReactNode
}

export const ContainerTypesContainer = (props: ContainerTypesProps) => {
  return (
    <Stack height={'calc(100vh - 132px)'} p={'5px'} width={'100%'}>
      <Box>{props.children}</Box>
      <Box mt={'10px'}>{props.packagesTableActions}</Box>
    </Stack>
  )
}
