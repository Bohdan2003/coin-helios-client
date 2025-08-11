'use client';
//ui
import { StickyHeedTable } from '@/ui/tables/StickyHeedTable';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { CoinCell } from '@/ui/tables/cells/CoinCell';
// import { ChainCell } from "@/ui/table/cells/ChainCell";
import { PercentChangeCell } from '@/ui/tables/cells/PercentChangeCell';
import { VotesCell } from '@/ui/tables/cells/VotesCell';
import { FavoriteCell } from '@/ui/tables/cells/FavoriteCell';
import { SortableHeaderCell } from '@/ui/tables/cells/SortableHeaderCell';
import { BuyCell } from '@/ui/tables/cells/BuyCell';
import { StatusCell } from '@/ui/tables/cells/StatusCell';
import { HeaderCell } from '@/ui/tables/cells/HeaderCell';
//utils
import { NumberFormatter } from '@/utils/NumberFormatter';
//types
import { TCoin, TSort } from '@/modules/coins/CoinsApi';
import { TSetPage, TSetSort } from '@/app/sections/CoinsSection/store';

type TStickyHeadCoinsTableProps = {
  sort: TSort;
  isLoading: boolean;
  isPending: boolean;
  isError: boolean;
  rowsAmount: number;
  setPage: TSetPage;
  setSort: TSetSort;
  rows?: TCoin[];
}

export const StickyHeadCoinsTable: React.FC<TStickyHeadCoinsTableProps> = ({
  sort,
  isLoading,
  isPending,
  isError,
  rowsAmount,
  setSort,
  setPage,
  rows,
}) => {
  const SortCoins = (key: TSort['key'], dir: TSort['dir']) => {
    setSort(key, dir);
    setPage(1);
  };

  const firstColSx = {
    position: 'sticky',
    zIndex: 10,
    left: 0,
  };

  return (
    <StickyHeedTable
      rowsAmount={rowsAmount}
      colsAmount={11}
      isPending={isPending}
      isError={isError}
      headRow={
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
            sort={sort}
            onChange={SortCoins}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text="24H"
            columnKey="percent_change_24h"
            sort={sort}
            onChange={SortCoins}
            isLoading={isLoading}
          />
          <HeaderCell text="7Days"/>
          <SortableHeaderCell
            text="Price"
            columnKey="price"
            sort={sort}
            onChange={SortCoins}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text="Marketcap"
            columnKey="market_cap"
            sort={sort}
            onChange={SortCoins}
            isLoading={isLoading}
          />
          <SortableHeaderCell
            text="Votes"
            columnKey="votes"
            sort={sort}
            onChange={SortCoins}
            isLoading={isLoading}
          />
          <HeaderCell
            text="Category"
            hidden
          />
          <HeaderCell
            text="Favorite"
            hidden
          />
        </TableRow>
      }
      bodyRows={
        <>
          {
            !rows || rows?.length < 1
              ?
              <TableRow>
                <StatusCell
                  text="No matched"
                  colsAmount={11}
                />
              </TableRow>
              :
              rows?.map(row => (
                <TableRow key={row.id}>
                  <CoinCell
                    sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-default)' }}
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
                  <TableCell className="opacity-80">
                    ---
                  </TableCell>
                  <TableCell className="opacity-80">
                    {NumberFormatter.getReadablePrice(row.price)}
                  </TableCell>
                  <TableCell className="opacity-80">
                    {NumberFormatter.getReadableCompactedPrice(row.price)}
                  </TableCell>
                  <VotesCell
                    votes={row.votes}
                    id={row.id}
                  />
                  <BuyCell id={row.id}/>
                  <FavoriteCell id={row.id}/>
                </TableRow>
              ))
          }
        </>
      }
    />
  );
};