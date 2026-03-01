'use client';
//ui
import TableContainer from '@mui/material/TableContainer';
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
import type { SxProps, Theme } from '@mui/material/styles';
//utils
import { cn } from '@/shared/lib/cn';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';

type TSimpleTableProps = {
  className?: string;
  head: React.ReactNode;
  body: React.ReactNode;
  dictionary: TDictionary['errors'];
  sx?: SxProps<Theme>;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  isEmpty: number | undefined | boolean;
  rowsAmount: number;
  colsAmount: number;
  skeletonHeight: number;
}

export const SimpleTable: React.FC<TSimpleTableProps> = ({
  dictionary: d,
  head,
  body,
  className,
  sx,
  isLoading,
  isFetching,
  isError,
  isEmpty,
  rowsAmount,
  colsAmount,
  skeletonHeight
}) => {
  const isSecondFetching = !isLoading && isFetching;
  const skeletonRows = Array.from({ length: rowsAmount });
  const skeletonCols = Array.from({ length: colsAmount });

  return (
    <TableContainer
      className={cn('relative', className)}
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
      {
        isSecondFetching &&
        <div className="absolute z-20 top-[75px] bottom-[20px] left-1/2 -translate-x-1/2">
          <span className="-mt-[40px] sticky top-[45%]">
            <CircularProgress/>
          </span>
        </div>
      }
      <Table>
        <TableHead>
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
                : isEmpty
                  ?
                  <TableRow>
                    <StatusCell
                      message={ d['noData'] }
                      colsAmount={colsAmount}
                    />
                  </TableRow>
                  :
                  body
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};
