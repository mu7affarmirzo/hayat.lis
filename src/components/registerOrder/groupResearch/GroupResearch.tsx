import { Box, Typography } from '@mui/material'

interface Props {
  value: any
}

function GroupResearch({ value }: Props) {
  return (
    <Box className=" ">
      <Box sx={{ border: ' 1px solid red' }}>
        <Typography sx={{}}>Группа/Исследование</Typography>
      </Box>
    </Box>
  )
}

export default GroupResearch
