'use client';
//ui
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Skeleton } from '@mui/material';
import { StatusCell } from '@/shared/ui/tables/cells/StatusCell';
//icons
import CircularProgress from '@mui/material/CircularProgress';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
import type { SxProps, Theme } from '@mui/material/styles';
//utils
import { cn } from '@/shared/lib/cn';

type TStickyHeedTableProps = {
  dictionary: TDictionary['errors'];
  className?: string;
  head: React.ReactNode;
  body: React.ReactNode;
  rowsAmount: number | undefined;
  colsAmount: number;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  limit?: number;
  sx?: SxProps<Theme>;
  skeletonHeight: number;
}

export const StickyHeedTable: React.FC<TStickyHeedTableProps> = ({
  dictionary: d,
  className,
  head,
  body,
  rowsAmount,
  colsAmount,
  isLoading,
  isFetching,
  isError,
  limit,
  sx,
  skeletonHeight,
}) => {
  const isSecondFetching = !isLoading && isFetching;
  const skeletonRows = Array.from({ length: limit || 1 });
  const skeletonCols = Array.from({ length: colsAmount });

  return (
    <div className={cn('relative', className)}>
      {
        isSecondFetching &&
        <div className="absolute z-20 top-[75px] bottom-[20px] left-1/2 -translate-x-1/2">
          <span className="-mt-[40px] sticky top-[45%]">
            <CircularProgress/>
          </span>
        </div>
      }
      <Table>
        <TableHead
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 30,
            backgroundColor: 'var(--palette-background-paper)',
            '[data-dark] &': {
              backgroundColor: 'var(--palette-background-paper)',
            },
            '& .MuiTableCell-root:first-of-type': {
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
            },
            '& .MuiTableCell-root:last-of-type': {
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
            },
          }}
        >
          { head }
        </TableHead>
        <TableBody
          sx={{
            opacity: (!isLoading && isFetching) ? 0.5 : 1,
            pointerEvents: (!isLoading && isFetching) ? 'none' : 'all',
            ...sx
          }}
        >
          {
            isError
              ?
              <TableRow>
                <StatusCell
                  message={ d.error }
                  colsAmount={colsAmount}
                />
              </TableRow>
              :
              isLoading
                ?
                skeletonRows.map((_, i) => (
                  <TableRow key={i}>
                    { skeletonCols.map((_, j) => (
                      <TableCell key={`${i}${j}`}>
                        <Skeleton height={skeletonHeight}/>
                      </TableCell>
                    )) }
                  </TableRow>
                ))
                : rowsAmount
                  ?
                  body
                  :
                  <TableRow>
                    <StatusCell
                      message={ d['noData'] }
                      colsAmount={colsAmount}
                    />
                  </TableRow>
          }
        </TableBody>
      </Table>
    </div>
  );
};