'use client';
//ui
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Skeleton } from '@mui/material';
import { StatusCell } from '@/ui/tables/cells/StatusCell';
//types
import type { SxProps, Theme } from '@mui/material/styles';

type TStickyHeedTableProps = {
  head: React.ReactNode;
  body: React.ReactNode;
  rowsAmount: number;
  colsAmount: number;
  isPending: boolean;
  isError: boolean;
  sx?: SxProps<Theme>;
}

export const StickyHeedTable: React.FC<TStickyHeedTableProps> = ({
  head,
  body,
  rowsAmount,
  colsAmount,
  isPending,
  isError,
  sx
}) => {
  const skeletonRows = Array.from({ length: rowsAmount });
  const skeletonCols = Array.from({ length: colsAmount });

  return (
    <Table
      aria-label="simple table"
      sx={{
        '& .MuiTableHead-root': {
          position: 'sticky',
          top: 0,
          zIndex: 30,
          backgroundColor: 'var(--palette-background-paper)',
          '[data-dark] &': {
            backgroundColor: 'var(--palette-background-paper)',
          }
        },
        '& .MuiTableCell-root': {
          p: {
            xs: '10px',
            lg: '16px'
          },
        },
        '& .MuiTableHead-root .MuiTableCell-root:first-of-type': {
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
        },
        '& .MuiTableHead-root .MuiTableCell-root:last-of-type': {
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        },
        ...sx
      }}
    >
      <TableHead>
        { head }
      </TableHead>
      <TableBody>
        {
          isError
            ?
            <TableRow>
              <StatusCell
                text="Something went wrong"
                colsAmount={11}
              />
            </TableRow>
            : isPending
              ?
              skeletonRows.map((_, i) => (
                <TableRow key={i}>
                  { skeletonCols.map((_, j) => (
                    <TableCell key={`${i}${j}`}><Skeleton height={40}/></TableCell>
                  )) }
                </TableRow>
              ))
              : body
        }
      </TableBody>
    </Table>
  );
};