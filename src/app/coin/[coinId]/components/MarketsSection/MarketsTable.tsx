'use client';
//ui
import { StickyHeedTable } from '@/ui/tables/StickyHeedTable';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { SortableHeaderCell } from '@/ui/tables/cells/SortableHeaderCell';
import { BuyCell } from '@/ui/tables/cells/BuyCell';
import { HeaderCell } from '@/ui/tables/cells/HeaderCell';
//utils
import { memo } from 'react';
import { NumberFormatter } from '@/utils/NumberFormatter';
//types
import {
  TCoinMarket,
  TSortDir,
  TSortKey
} from '@/modules/coins/CoinsApi';

type TMarketsTableProps = {
  sortKey: TSortKey;
  sortDir: TSortDir;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  rowsAmount: number;
  onSortChange: (key: TSortKey, dir: TSortDir) => void;
  rows?: TCoinMarket[];
}

const firstColSx = {
  position: 'sticky',
  maxWidth: {
    xs: '80px',
    sm: '300px',
  },
  zIndex: 5,
  left: 0,
  backgroundColor: 'var(--palette-background-default)'
};

const colsAmount = 4;

export const MarketsTable: React.FC<TMarketsTableProps> = memo(({
  sortKey,
  sortDir,
  isLoading,
  isFetching,
  isError,
  rowsAmount,
  onSortChange,
  rows,
}) => {

  const handleBuy = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <StickyHeedTable
      rowsAmount={rowsAmount}
      colsAmount={colsAmount}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      isEmpty={!rows || rows?.length < 1}
      skeletonHeight={31.17}
      head={
        <TableRow>
          <HeaderCell text="Exchanges"/>
          <SortableHeaderCell
            text="Price"
            columnKey="price"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text="24H trading volume"
            columnKey="volume_24h"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <HeaderCell
            text="Buy"
            hidden
          />
        </TableRow>
      }
      body={
        <>
          {
            rows?.map(row => (
              <TableRow key={row.exchange_uuid}>
                <TableCell sx={firstColSx}>{ row.exchange_name }</TableCell>
                <TableCell className="opacity-80">
                  {NumberFormatter.getReadablePrice(+row.price)}
                </TableCell>
                <TableCell className="opacity-80">
                  {NumberFormatter.getReadablePrice(+row.volume_24h)}
                </TableCell>
                <BuyCell onClick={() => { handleBuy(row.url) }}/>
              </TableRow>
            ))
          }
        </>
      }
    />
  );
});

MarketsTable.displayName = 'MarketsTable';