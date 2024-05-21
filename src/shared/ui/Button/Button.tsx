import { type ButtonProps } from '@mui/material'
import { colors } from '../colors'
import { CustomButton } from './styles'

type Props = ButtonProps & {}

export const Button = (props: Props) => {
  return (
    <CustomButton
      {...props}
      variant="outlined"
      color={props.color ?? 'inherit'}
      size="small"
      sx={{
        height: '30px',
        background: colors.bgLightGray,
        border: `1px solid ${colors.borderLighterGray}`,
        textTransform: 'capitalize',
        ...props.sx,
      }}
    />
  )
}
