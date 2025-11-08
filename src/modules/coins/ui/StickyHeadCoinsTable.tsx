'use client';
//ui
import { StickyHeedTable } from '@/shared/ui/tables/StickyHeedTable';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { CoinCell } from '@/shared/ui/tables/cells/CoinCell';
// import { ChainCell } from "@/ui/table/cells/ChainCell";
import { PercentChangeCell } from '@/shared/ui/tables/cells/PercentChangeCell';
import { VotesCell } from '@/shared/ui/tables/cells/VotesCell';
import { FavoriteCell } from '@/shared/ui/tables/cells/FavoriteCell';
import { SortableHeaderCell } from '@/shared/ui/tables/cells/SortableHeaderCell';
import { BuyCell } from '@/shared/ui/tables/cells/BuyCell';
import { HeaderCell } from '@/shared/ui/tables/cells/HeaderCell';
import { ChartCell } from '@/shared/ui/tables/cells/ChartCell';
//utils
import { redirect } from 'next/navigation';
import { ROUTES } from '@/shared/routes/routes';
import { NumberFormatter } from '@/shared/lib/NumberFormatter';
import { memo } from 'react';
//types
import {
  TCoin,
  TSortDir,
  TSortKey
} from '@/modules/coins/api/types';

type TStickyHeadCoinsTableProps = {
  className?: string;
  sortKey: TSortKey;
  sortDir: TSortDir;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  rowsAmount: number;
  onSortChange: (key: TSortKey, dir: TSortDir) => void;
  rows?: TCoin[];
}

const firstColSx = {
  position: 'sticky',
  maxWidth: {
    xs: '100px',
    sm: '300px',
  },
  zIndex: 5,
  left: 0,
};

const colsAmount = 11;

export const StickyHeadCoinsTable: React.FC<TStickyHeadCoinsTableProps> = memo(({
  className,
  sortKey,
  sortDir,
  isLoading,
  isFetching,
  isError,
  rowsAmount,
  onSortChange,
  rows,
}) => {
  const handleBuy = (id: string) => {
    redirect(ROUTES.MARKETS(id));
  };

  return (
    <StickyHeedTable
      className={className}
      rowsAmount={rowsAmount}
      colsAmount={colsAmount}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      isEmpty={!rows || rows?.length < 1}
      skeletonHeight={40}
      head={
        <TableRow>
          <HeaderCell
            text="Coin"
            sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-paper)' }}
          />
          <HeaderCell text="Category"/>
          <HeaderCell text="Chain"/>
          <SortableHeaderCell
            text="1H"
            columnKey="percent_change_1h"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text="24H"
            columnKey="percent_change_24h"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <HeaderCell text="7Days"/>
          <SortableHeaderCell
            text="Price"
            columnKey="price"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text="Marketcap"
            columnKey="market_cap"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text="Votes"
            columnKey="votes"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <HeaderCell
            text="Buy"
            hidden
          />
          <HeaderCell
            text="Favorite"
            hidden
          />
        </TableRow>
      }
      body={
        <>
          {
            rows?.map(row => (
              <TableRow
                key={row.id}
                sx={{
                  '& .MuiTableCell-root': {
                    paddingY: '6px',
                  },
                }}
              >
                <CoinCell
                  sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-default)' }}
                  id={row.id}
                  icon={row.icon}
                  name={row.name}
                  symbol={row.symbol}
                />
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                {/*<ChainCell*/}
                {/*  icon={row.icon}*/}
                {/*  name={row.chain.name}*/}
                {/*/>*/}
                <PercentChangeCell percent={row.percent_change_1h}/>
                <PercentChangeCell percent={row.percent_change_24h}/>
                <ChartCell
                  percent={row.percent_change_7d}
                  chartPoints={row.price_chart_points}
                />
                <TableCell className="opacity-80">
                  {NumberFormatter.getReadablePrice(row.price)}
                </TableCell>
                <TableCell className="opacity-80">
                  {NumberFormatter.getCompactedPrice(row.price)}
                </TableCell>
                <VotesCell
                  votes={row.votes}
                  id={row.id}
                />
                <BuyCell onClick={() => { handleBuy(row.id); }}/>
                <FavoriteCell id={row.id}/>
              </TableRow>
            ))
          }
        </>
      }
    />
  );
});

StickyHeadCoinsTable.displayName = 'StickyHeadCoinsTable';