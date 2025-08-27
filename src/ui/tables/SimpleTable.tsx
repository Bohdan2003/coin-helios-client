'use client';
//ui
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
//types
import type { SxProps, Theme } from '@mui/material/styles';
//utils
import { cn } from '@/utils/cn';

type TSimpleTableProps = {
  children: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

export const SimpleTable: React.FC<TSimpleTableProps> = ({
  children,
  className,
  sx,
}) => {
  return (
    <TableContainer
      className={cn(className)}
      sx={{
        border: '1px solid var(--palette-divider)',
        backgroundColor: 'var(--palette-background-default)',
        borderRadius: '24px',
        '& .MuiTableHead-root .MuiTableCell-root': {
          paddingBottom: '6px',
        },
        '[data-dark] &': {
          border: '1px solid transparent',
          backgroundColor: 'var(--palette-background-paper)',
        },
        ...sx
      }}
    >
      <Table aria-label="simple table">
        { children }
      </Table>
    </TableContainer>
  );
};
