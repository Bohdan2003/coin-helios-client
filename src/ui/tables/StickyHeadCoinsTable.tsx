'use client'
//ui
import { StickyHeedTable } from "@/ui/tables/StickyHeedTable";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { CoinCell } from "@/ui/tables/cells/CoinCell";
// import { ChainCell } from "@/ui/table/cells/ChainCell";
import { PercentChangeCell } from "@/ui/tables/cells/PercentChangeCell";
import { VotesCell } from "@/ui/tables/cells/VotesCell";
import { FavoriteCell } from "@/ui/tables/cells/FavoriteCell";
import { SortableHeaderCell } from "@/ui/tables/cells/SortableHeaderCell";
import { BuyCell } from "@/ui/tables/cells/BuyCell";
//utils
import { NumberFormatter } from "@/utils/NumberFormatter";
//types
import { TCoin, TSort } from "@/modules/coins/CoinsApi";
import { TSetPage, TSetSort } from "@/app/sections/CoinsSection/store";

type TStickyHeadCoinsTableProps = {
  sort: TSort;
  setPage: TSetPage;
  setSort: TSetSort;
  rows: TCoin[];
}

export const StickyHeadCoinsTable: React.FC<TStickyHeadCoinsTableProps> = ({
  sort,
  setSort,
  setPage,
  rows,
}) => {
  if(!rows || rows.length === 0) return <p className="text-center opacity-50">No matched</p>

  const onSortChange = (key: TSort['key'], dir: TSort['dir']) => {
    setSort(key, dir);
    setPage(1);
  }

  return (
    <StickyHeedTable>
      <TableHead>
        <TableRow>
          <TableCell>Coin</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Chain</TableCell>
          <SortableHeaderCell
            text="1H"
            columnKey="percent_change_1h"
            sort={sort}
            onChange={onSortChange}
          />
          <SortableHeaderCell
            text="24H"
            columnKey="percent_change_24h"
            sort={sort}
            onChange={onSortChange}
          />
          <TableCell>7Days</TableCell>
          <SortableHeaderCell
            text="Price"
            columnKey="price"
            sort={sort}
            onChange={onSortChange}
          />
          <SortableHeaderCell
            text="Marketcap"
            columnKey="market_cap"
            sort={sort}
            onChange={onSortChange}
          />
          <SortableHeaderCell
            text="Votes"
            columnKey="votes"
            sort={sort}
            onChange={onSortChange}
          />
          <TableCell><span className="hidden">Buy</span></TableCell>
          <TableCell><span className="hidden">Favorite</span></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <CoinCell
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
            <PercentChangeCell
              percent={row.percent_change_1h}
            />
            <PercentChangeCell
              percent={row.percent_change_24h}
            />
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
        ))}
      </TableBody>
    </StickyHeedTable>
  )
}