import { type ThemeOptions } from '@mui/material'
import { colors } from '@/shared/ui/colors'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      lightWhite: string
      darkGreen: string
      mainRed: string
      regDarkText: string
      mainBlue: string
      darkBlue: string
      bgHoverGray: string
      bgLightGray: string
      darkGray: string
      borderGray: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      lightWhite?: string
      darkGreen?: string
      mainRed?: string
      regDarkText?: string
      mainBlue?: string
      darkBlue?: string
      bgHoverGray?: string
      bgLightGray?: string
      darkGray?: string
      borderGray?: string
    }
  }
}

export const muiTheme: ThemeOptions = {
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    body2: {
      letterSpacing: '0.15px',
      lineHeight: '20px',
      fontSize: '14px',
      fontWeight: 400,
      color: colors.regDarkText,
    },
    body1: {
      letterSpacing: '0.15px',
      lineHeight: '20px',
      fontSize: '14px',
      color: colors.regDarkText,
    },
    caption: {
      fontSize: '12px',
      lineHeight: '12px',
      letterSpacing: '0.4px',
      color: colors.regDarkText,
    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 500,
      color: colors.regDarkText,
      letterSpacing: '0.1px',
    },
    h6: {
      fontSize: '20px',
      lineHeight: '32px',
      fontWeight: 500,
      color: colors.regDarkText,
      letterSpacing: '0.15px',
    },
  },
  status: colors,
}
