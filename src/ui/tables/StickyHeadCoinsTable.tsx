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
import { cn } from "@/utils/cn";
//types
import { TCoin, TSort } from "@/modules/coins/CoinsApi";

type TStickyHeadCoinsTableProps = {
  className?: string;
  sort: TSort;
  setSort: (key : TSort['key'], dir: TSort['dir']) => void;
  rows: TCoin[]
}

export const StickyHeadCoinsTable: React.FC<TStickyHeadCoinsTableProps> = ({
  className,
  sort,
  setSort,
  rows,
}) => {
  if(!rows || rows.length === 0) return <p className={cn(className, 'text-center')}>No matched</p>

  return (
    <StickyHeedTable className={className}>
      <TableHead>
        <TableRow>
          <TableCell>Coin</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Chain</TableCell>
          <SortableHeaderCell
            columnKey="percent_change_1h"
            sort={sort}
            onSortChange={setSort}
          >
            1H
          </SortableHeaderCell>
          <SortableHeaderCell
            columnKey="percent_change_24h"
            sort={sort}
            onSortChange={setSort}
          >
            24H
          </SortableHeaderCell>
          <TableCell>7Days</TableCell>
          <SortableHeaderCell
            columnKey="price"
            sort={sort}
            onSortChange={setSort}
          >
            Price
          </SortableHeaderCell>
          <SortableHeaderCell
            columnKey="market_cap"
            sort={sort}
            onSortChange={setSort}
          >
            Marketcap
          </SortableHeaderCell>
          <SortableHeaderCell
            columnKey="votes"
            sort={sort}
            onSortChange={setSort}
          >
            Votes
          </SortableHeaderCell>
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