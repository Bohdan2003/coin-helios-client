'use client'
import { createTheme, Theme } from '@mui/material/styles';
import type { Components } from "@mui/material/styles";

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
      },
      outlined:({ theme }) => ({
        color: theme.palette.text.primary,
        '& .MuiButton-startIcon, & .MuiButton-endIcon': {
          color: 'var(--blue)',
        },
        '& .MuiTouchRipple-root .MuiTouchRipple-child': {
          backgroundColor: theme.palette.primary.main,
        },
      }),
      sizeSmall: { padding: '6px 10px' },
      sizeMedium: { padding: '10px 16px' },
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
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: theme.palette.mode === 'dark'
          ? 'none'
          : `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.mode === 'dark'
          ? theme.palette.background.paper
          : theme.palette.background.default,
        boxShadow: 'none',
        borderRadius: '24px',
        overflow: 'hidden',
      }),
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
        opacity: '60%',
        fontWeight: 700,

      },
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
    },
    primary: {
      main: '#1E74FE'
    }
  },
  typography: baseTypography,
  components: baseComponents,
});







