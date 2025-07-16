'use client'
import { createTheme, Theme } from '@mui/material/styles';
import type { Components } from "@mui/material/styles";


const baseComponents = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: 16,
        fontWeight: 400,
        textTransform: 'none' as const,
        borderRadius: 12,
        color: theme.palette.text.primary,
      }),
      outlined:({ theme }) => ({
        '& .MuiButton-startIcon, & .MuiButton-endIcon': {
          color: 'var(--blue)',
        },
        '& .MuiTouchRipple-root .MuiTouchRipple-child': {
          backgroundColor: theme.palette.primary.main,
        },
      }),
      sizeSmall: { padding: '6px 10px' },
      sizeMedium: { padding: '6px 16px' },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: 8,
        backgroundColor: theme.palette.background.default,
      }),
    },
  },
} satisfies Components<Theme>;


export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    background: {
      default: 'var(--light-bg)',
      paper: 'var(--second-light-bg)'
    },
    text: {
      primary: 'var(--black)',
    },
    primary: {
      main: '#1E74FE'
    }
  },
  components: baseComponents,
});


export const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    background: {
      default: 'var(--dark-bg)',
      paper: 'var(--second-dark-bg)'
    },
    primary: {
      main: '#1E74FE'
    }
  },
  components: baseComponents,
});







