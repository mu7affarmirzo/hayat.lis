import { Box, Typography } from '@mui/material'
import { TableArrow, TableSaveIcon } from '../../../assets/icons/icons'
import { FC } from 'react'

interface GroupProps {
  title?: string
}

const GroupTable: FC<GroupProps> = (props) => {
  return (
    <Box className=" flex w-[100%] items-center border">
      <Box className=" border-r flex p-[5px]">
        <button>
          <TableArrow />
        </button>
        <button>
          <TableSaveIcon />
        </button>
      </Box>
      <button className=" flex p-[5px] w-[100%] justify-start">
        <Typography className="">{props.title}</Typography>
      </button>
    </Box>
  )
}

export default GroupTable
