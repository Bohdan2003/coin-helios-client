'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data',
    cssVarPrefix: '',
    nativeColor: true,
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: 'var(--blue)',
        },
        secondary: {
          main: 'var(--blue)',
        },
        action: {
          active: 'var(--black)',
        },
        success: {
          main: 'var(--green)',
        },
        error: {
          main: 'var(--orange)',
        },
        background: {
          default: 'var(--lightBg)',
          paper: 'var(--lightBg2)',
        },
        divider: 'var(--darkGray)',
        text: {
          primary: 'var(--black)',
          secondary: 'var(--black)',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: 'var(--blue)',
        },
        secondary: {
          main: 'var(--blue)',
        },
        action: {
          active: 'var(--white)',
        },
        success: {
          main: 'var(--green)',
        },
        error: {
          main: 'var(--orange)',
        },
        background: {
          default: 'var(--darkBg)',
          paper: 'var(--darkBg2)',
        },
        divider: 'var(--darkGray)',
        text: {
          primary: 'var(--white)',
          secondary: 'var(--white)',
        },
      },
    },
  },
  typography: {
    allVariants: { lineHeight: 1.2 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 400,
          textTransform: 'none',
          borderRadius: 12,
          boxShadow: 'none',
        },
        outlined: {
          color: 'var(--palette-text-primary)',
          '& .MuiButton-startIcon, & .MuiButton-endIcon': {
            color: 'var(--palette-primary-main)',
          },
          '& .MuiTouchRipple-root .MuiTouchRipple-child': {
            backgroundColor: 'var(--palette-primary-main)',
          },
        },
        sizeSmall: { padding: '6px 10px' },
        sizeMedium: { padding: '10px 16px' },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: 'var(--palette-primary-main)',
            backgroundColor: 'color-mix(in srgb, var(--palette-primary-main) 30%, transparent)',
          },
        },
      ],
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
          backgroundColor: 'var(--palette-background-default)',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            borderBottom: 'none',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:not(:last-child)': {
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '6px',
              right: '16px',
              height: 1,
              backgroundColor: 'var(--palette-divider)',
              borderRadius: 0.5,
            },
            '[data-dark] &': {
              '&:after': {
                opacity: 0.2,
              },
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontSize: 14,
          borderBottom: 'none',
          opacity: 0.6,
          fontWeight: 700,
          backgroundColor: 'transparent',
        },
      },
    },
  },
});