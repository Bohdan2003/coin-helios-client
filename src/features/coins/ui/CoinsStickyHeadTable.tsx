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
import { ROUTES } from '@/shared/routes';
import { NumberFormatter } from '@/shared/lib/NumberFormatter';
import { memo } from 'react';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
import { TCoin } from '@/features/coins/api/coins/getCoins';
import {
  TSortDir,
  TSortKey
} from '@/features/coins/api/types';

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

export const CoinsStickyHeadTable: React.FC<{
  className?: string;
  dictionary: {
    th: TDictionary['tables']['th'];
    errors: TDictionary['errors'];
  };
  sortKey: TSortKey;
  sortDir: TSortDir;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  onSortChange: (key: TSortKey, dir: TSortDir) => void;
  limit?: number;
  rows?: TCoin[];
}> = memo(({
  className,
  dictionary: { th: d, errors },
  sortKey,
  sortDir,
  isLoading,
  isFetching,
  isError,
  onSortChange,
  limit,
  rows,
}) => {
  const handleBuy = (id: string) => {
    redirect(ROUTES.MARKETS(id));
  };

  return (
    <StickyHeedTable
      dictionary={ errors }
      className={className}
      rowsAmount={rows?.length}
      colsAmount={colsAmount}
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      limit={limit}
      skeletonHeight={40}
      head={
        <TableRow>
          <HeaderCell
            text={d['coin']}
            sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-paper)' }}
          />
          <HeaderCell text={d['category']}/>
          <HeaderCell text={d['chain']}/>
          <SortableHeaderCell
            text={d['1H']}
            columnKey="percent_change_1h"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text={d['24H']}
            columnKey="percent_change_24h"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <HeaderCell text={d['7Days']}/>
          <SortableHeaderCell
            text={d['price']}
            columnKey="price"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text={d['marketCap']}
            columnKey="market_cap"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text={d['votes']}
            columnKey="votes"
            sortKey={sortKey}
            sortDir={sortDir}
            onChange={onSortChange}
            isLoading={isLoading}
          />
          <HeaderCell
            text={d['buy']}
            hidden
          />
          <HeaderCell
            text={d['favorite']}
            hidden
          />
        </TableRow>
      }
      body={
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
    />
  );
});

CoinsStickyHeadTable.displayName = 'StickyHeadCoinsTable';