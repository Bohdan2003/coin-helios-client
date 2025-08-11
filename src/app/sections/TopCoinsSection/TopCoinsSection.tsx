//ui
import { SimpleTable } from '@/ui/tables/SimpleTable';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ChainCell } from '@/ui/tables/cells/ChainCell';
import { CoinCell } from '@/ui/tables/cells/CoinCell';
import { PercentChangeCell } from '@/ui/tables/cells/PercentChangeCell';
import { VotesCell } from '@/ui/tables/cells/VotesCell';
import { FavoriteCell } from '@/ui/tables/cells/FavoriteCell';
//types
import type { TCoin } from '@/modules/coins/CoinsApi';
//helper
import { getTopCoinsData } from '@/app/sections/TopCoinsSection/helper';

type TTopCoin = TCoin;

export const TopCoinsSection: React.FC = () => {
  const rows: TTopCoin[] = getTopCoinsData();

  return (
    <section>
      <h3 className="font-medium text-[20px] pl-[16px]">Top Coins</h3>
      <SimpleTable
        className="mt-[16px]"
        sx={{
          '& .col-chain': { display: { xs: 'table-cell', sm: 'none', lg: 'table-cell' } },
          '& .col-votes': { display: { xs: 'table-cell', sm: 'none', md: 'table-cell' } },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Coin</TableCell>
            <TableCell>24H</TableCell>
            <TableCell className="col-chain">Chain</TableCell>
            <TableCell>Price</TableCell>
            <TableCell className="col-votes">Votes</TableCell>
            <TableCell hidden>Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{i + 1}</TableCell>
              <CoinCell
                icon={row.icon}
                name={row.name}
                symbol={row.symbol}
              />
              <PercentChangeCell
                percent={row.percent_change_24h}
              />
              <ChainCell
                className="col-chain"
                icon={row.icon}
                name={row.chain.name}
              />
              <TableCell className="opacity-80">${row.price}</TableCell>
              <VotesCell
                className="col-votes"
                votes={row.votes}
                id={row.id}
              />
              <FavoriteCell id={row.id}/>
            </TableRow>
          ))}
        </TableBody>
      </SimpleTable>
    </section>
  );
};
