'use client';
//ui
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

export const SimpleTable: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TableContainer
      className="mt-[16px]"
      sx={{
        border: '1px solid var(--darkGray)',
        backgroundColor: 'var(--lightBg)',
        borderRadius: '24px',
        '& .MuiTableHead-root .MuiTableCell-root': {
          paddingBottom: '6px',
        },

        '[data-dark] &': {
          border: '1px solid transparent',
          backgroundColor: 'var(--darkBg2)',
        },
      }}
    >
      <Table aria-label="simple table">
        { children }
      </Table>
    </TableContainer>
  );
}
