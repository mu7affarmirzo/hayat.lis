import { Stack } from '@mui/material'
import { type ReactNode } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

type Props = {
  navbarSlot?: ReactNode
}

export function Layout(props: Props) {
  return (
    <Stack p={0}>
      {props.navbarSlot}
      <Outlet />
      <ScrollRestoration />
    </Stack>
  )
}
