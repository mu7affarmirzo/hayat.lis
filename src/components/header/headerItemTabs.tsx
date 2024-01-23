import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { SvgProps } from '../../types/iconTypes'

type Props = {
  title: string
  icon: React.ComponentType<SvgProps>
  path?: string
}

const HeaderItemTabs: FC<Props> = (props) => {
  return (
    <Box className="flex px-[10px]  flex-col items-center gap-1 py-4 rounded cursor-pointer">
      <props.icon height={24} width={24} />
      <Typography className="text-sm font-normal text-center">
        {props.title}
      </Typography>
    </Box>
  )
}

export default HeaderItemTabs
