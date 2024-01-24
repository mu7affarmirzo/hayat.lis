/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material'

type propsType = {
  style?: string
  title?: string
  icon?: any
  variant?: 'text' | 'contained' | 'outlined'
  onClick?: () => void
  disabled?: boolean
}
const DefaultButton = (props: propsType) => {
  const { style, title, icon, variant, onClick, disabled } = props
  return (
    <Button
      onClick={onClick}
      variant={variant ? variant : 'contained'}
      startIcon={icon}
      disabled={disabled}
      className={`${style ? style : ' bg-[#2196F3] h-[46px] text-[#fff]'} ${
        disabled ? 'opacity-50' : 'opacity-100'
      } text-[14px]  capitalize text-[#000]`}
    >
      {title}
    </Button>
  )
}

export default DefaultButton
