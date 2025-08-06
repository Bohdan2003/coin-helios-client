'use client';
import { useColorScheme } from '@mui/material/styles';
import Table from '@mui/material/Table';

export const StickyHeedTable: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { mode } = useColorScheme();

  return (
    <Table
      aria-label="simple table"
      sx={{
        '& .MuiTableHead-root': {
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: mode === 'dark'
            ? 'var(--darkBg2)'
            : 'var(--lightBg2)',
        },

        '& .MuiTableHead-root .MuiTableCell-root:first-of-type': {
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
        },

        '& .MuiTableHead-root .MuiTableCell-root:last-of-type': {
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        }
      }}
    >
      { children }
    </Table>
  )
}