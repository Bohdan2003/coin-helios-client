'use client'
//hooks
import { useTheme } from '@mui/material/styles'
//ui
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

export const SimpleTable: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme()

  return (
      <TableContainer
        className="mt-[16px]"
        sx={{
          border:
            theme.palette.mode === 'dark'
              ? 'none'
              : `1px solid ${theme.palette.divider}`,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.background.paper
              : theme.palette.background.default,
          borderRadius: '24px',

          '& .MuiTableHead-root .MuiTableCell-root': {
            paddingBottom: '6px',
          },
        }}
      >
        <Table aria-label="simple table">
          { children }
        </Table>
      </TableContainer>
  );
}
