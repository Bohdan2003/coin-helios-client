'use client';
//ui
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Skeleton } from '@mui/material';
import { StatusCell } from '@/ui/tables/cells/StatusCell';

type TStickyHeedTableProps = {
  headRow: React.ReactNode;
  bodyRows: React.ReactNode;
  rowsAmount: number;
  colsAmount: number;
  isPending: boolean;
  isError: boolean;
}

export const StickyHeedTable: React.FC<TStickyHeedTableProps> = ({
  headRow,
  bodyRows,
  rowsAmount,
  colsAmount,
  isPending,
  isError,
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
          zIndex: 10,
          backgroundColor: 'var(--palette-background-paper)',
          '[data-dark] &': {
            backgroundColor: 'var(--palette-background-paper)',
          }
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
      <TableHead>
        { headRow }
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
              : bodyRows
        }
      </TableBody>
    </Table>
  );
};