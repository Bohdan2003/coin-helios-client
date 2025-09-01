'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data',
    cssVarPrefix: '',
    nativeColor: true,
  },
  breakpoints: {
    values: { xs: 0, sm: 768, md: 1024, lg: 1400, xl: 1600 },
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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: 'var(--palette-background-paper)',
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 400,
          textTransform: 'none',
          borderRadius: 12,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        text: {
          color: 'var(--palette-text-primary)',
          '& .MuiTouchRipple-root .MuiTouchRipple-child': {
            backgroundColor: 'var(--palette-primary-main)',
          },
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
    MuiTable: {
      styleOverrides: {
        root: {
          minWidth: 'max-content',
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
              zIndex: 20,
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
        root: ({ theme }) => ({
          width: 'auto',
          padding: '10px',
          [theme.breakpoints.up('lg')]: {
            padding: '16px',
          },
        }),
        head: {
          fontSize: 14,
          borderBottom: 'none',
          fontWeight: 700,
          backgroundColor: 'transparent',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          margin: 0,
          boxShadow: 'none',
          borderRadius: '16px',
          backgroundColor: 'var(--palette-background-default)',
          backgroundImage: 'none',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          margin: 0,
          boxShadow: 'none',
          borderRadius: '16px',
          backgroundImage: 'none',
          backgroundColor: 'var(--palette-background-default)',
          border: '1px solid var(--palette-primary-main)',

          '[data-dark] &': {
            backgroundColor: 'var(--palette-background-paper)',
            borderColor: 'transparent',
          },
        },
      },
    }
  },
});