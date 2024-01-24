/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
type propsType = {
  style?: string
  label?: string
  leftLable?: string
  checkboxStyle?: any
}
const DefaultCheckbox = (props: propsType) => {
  const { style, label, leftLable } = props
  return (
    <Box className={`${style} flex items-center justify-between `}>
      {leftLable ? (
        <Typography className={`${style} text-[#000] text-[14px]`}>
          {leftLable}
        </Typography>
      ) : null}
      <FormControlLabel
        sx={{ padding: 0 }}
        control={<Checkbox defaultChecked sx={props.checkboxStyle} />}
        label={label}
        className="text-[#8d8c8c] p-0 m-0"
      />
    </Box>
  )
}

export default DefaultCheckbox
