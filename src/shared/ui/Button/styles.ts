import { Button, type ButtonProps } from '@mui/material'
import styled from 'styled-components'
import { colors } from '../colors'

export const CustomButton = styled(Button)<ButtonProps>`
  background-color: #eeeeee;
  border: 1px solid ${colors.borderLighterGray};
  height: 36px;
`
