import { type ThemeOptions } from '@mui/material'

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
  },
  status: {
    lightWhite: 'rgba(255,255,255,0.7)',
    darkGreen: '#3B873E',
    mainRed: '#F44336',
    regDarkText: '#000000DE',
    mainBlue: '#64B6F7',
    darkBlue: '#0057B2',
    bgHoverGray: '#E5E5E5',
    bgLightGray: '#F5F5F5',
    darkGray: '#9E9E9E',
    borderGray: '#0000003B',
  },
}
