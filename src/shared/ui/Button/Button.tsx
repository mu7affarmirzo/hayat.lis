import { type ButtonProps } from '@mui/material'
import { colors } from '../colors'
import { CustomButton } from './styles'

type Props = ButtonProps & {}

export const Button = (props: Props) => {
  return (
    <CustomButton
      {...props}
      variant="outlined"
      color="inherit"
      sx={{
        height: '36px',
        background: colors.borderLighterGray,
        border: `1px solid ${colors.borderLighterGray}`,
        ...props.sx,
      }}
    />
  )
}
