'use client';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Skeleton } from '@mui/material';

export const StickyHeedTable: React.FC<{
  headRow: React.ReactNode,
  bodyRows: React.ReactNode,
  rowsAmount: number,
  colsAmount: number,
  pending: boolean;
  error: boolean;
}> = ({
  headRow,
  bodyRows,
  rowsAmount,
  colsAmount,
  pending,
  error,
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
          backgroundColor: 'var(--lightBg2)',
          '[data-dark] &': {
            backgroundColor: 'var(--darkBg2)',
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
          error
            ?
            <TableRow>
              <TableCell
                colSpan={colsAmount}
                sx={{
                  textAlign: 'center',
                  py: 4,
                  opacity: 0.5
                }}
              >
                Error...
              </TableCell>
            </TableRow>
            : pending
              ?
              skeletonRows.map((_, i) => (
                <TableRow key={i}>
                  { skeletonCols.map((_, j) => (
                    <TableCell key={`${i}${j}`}><Skeleton height={34}/></TableCell>
                  )) }
                </TableRow>
              ))
              : bodyRows
        }
      </TableBody>
    </Table>
  );
};