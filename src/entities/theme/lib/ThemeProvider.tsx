import {
  createTheme,
  ThemeProvider as MuiProvider,
  type Theme,
} from '@mui/material'
import { type ReactNode } from 'react'
import { muiTheme } from '../model/theme'

type Props = {
  theme?: Theme
  children: ReactNode
}

export const ThemeProvider = (props: Props) => {
  const { theme, children } = props

  const defaultTheme = createTheme(muiTheme)

  return <MuiProvider theme={theme ?? defaultTheme}>{children}</MuiProvider>
}
