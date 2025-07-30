'use client'
import { createTheme, Theme } from '@mui/material/styles';
import type { Components } from "@mui/material/styles";
import { alpha } from '@mui/material/styles';

const baseTypography = {
  allVariants: {
    lineHeight: 1.2,
  },
};

const baseComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: 16,
        fontWeight: 400,
        textTransform: 'none' as const,
        borderRadius: 12,
        boxShadow: 'none',
      },
      outlined:({ theme }) => ({
        color: theme.palette.text.primary,
        '& .MuiButton-startIcon, & .MuiButton-endIcon': {
          color: theme.palette.primary.main,
        },
        '& .MuiTouchRipple-root .MuiTouchRipple-child': {
          backgroundColor: theme.palette.primary.main,
        },
      }),
      sizeSmall: { padding: '6px 10px' },
      sizeMedium: { padding: '10px 16px' },
    },
    variants: [
      {
        props: { variant: 'contained', color: 'secondary' },
        style: ({ theme }) => ({
          color: theme.palette.primary.main,
          backgroundColor: alpha(theme.palette.primary.main, 0.3),
        }),
      },
    ],
  },
  MuiMenu: {
    styleOverrides: {
      paper: ({ theme }) => ({
        borderRadius: 8,
        backgroundColor: theme.palette.background.default,
      }),
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
      root: ({ theme }) => ({
        '&:not(:last-child)': {
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '6px',
            right: '16px',
            height: 1,
            backgroundColor: theme.palette.divider,
            borderRadius: 0.5,
          },
        },
      }),
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
} satisfies Components<Theme>;


export const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    divider: 'var(--dark-gray)',
    background: {
      default: 'var(--light-bg)',
      paper: 'var(--second-light-bg)'
    },
    text: {
      primary: 'var(--black)',
      secondary: 'var(--black)',
    },
    primary: {
      main: '#1E74FE'
    },
  },
  typography: baseTypography,
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
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    },
    primary: {
      main: '#1E74FE'
    }
  },
  typography: baseTypography,
  components: baseComponents,
});







