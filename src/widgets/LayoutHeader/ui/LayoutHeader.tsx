import { Stack } from '@mui/material'
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LogoutButton } from '@/features/authentication/logout'
import { Navigation } from '@/features/navigation/navigate'
import { Icon } from '@/shared/ui'

type Props = {
  rightSlot?: ReactNode
}

export function LayoutHeader(props: Props) {
  return (
    <Stack
      direction={'row'}
      // position={'absolute'}
      // top={'0'}
      zIndex={100}
      width="100%"
      sx={{ background: 'white' }}
      justifyContent={'space-between'}
      alignItems={'center'}
      px={'30px'}
    >
      <Stack direction={'row'} alignItems={'center'} spacing={'50px'}>
        <Link to={'/'}>
          <Icon className="w-[112px] h-10" type="logo" />
        </Link>
        <Navigation />
      </Stack>
      <LogoutButton />
    </Stack>
  )
}
