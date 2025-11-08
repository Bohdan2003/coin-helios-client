//ui
import { SimpleTable } from '@/shared/ui/tables/SimpleTable';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ChainCell } from '@/shared/ui/tables/cells/ChainCell';
import { CoinCell } from '@/shared/ui/tables/cells/CoinCell';
import { PercentChangeCell } from '@/shared/ui/tables/cells/PercentChangeCell';
import { VotesCell } from '@/shared/ui/tables/cells/VotesCell';
import { FavoriteCell } from '@/shared/ui/tables/cells/FavoriteCell';
import { HeaderCell } from '@/shared/ui/tables/cells/HeaderCell';
//types
import type { TCoin } from '@/modules/coins/api/coinPriceHistory/getCoinPriceHistory';
//helper
import { getTopCoinsData } from '@/app/[lang]/_ui/TopCoinsSection/helper';

export const TopCoinsSection: React.FC = () => {
  const rows: TCoin[] = getTopCoinsData();

  const stickyColSx = {
    position: 'sticky',
    zIndex: 10,
    backgroundColor: 'var(--palette-background-default)',
    '[data-dark] &': {
      backgroundColor: 'var(--palette-background-paper)',
    }
  };

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
            <HeaderCell text="#" sx={{
              left: 0,
              ...stickyColSx
            }}/>
            <HeaderCell
              text="#Coin"
              sx={{
                left: '40px',
                ...stickyColSx
              }}
            />
            <HeaderCell text="24H"/>
            <HeaderCell
              text="Chain"
              className="col-chain"
            />
            <HeaderCell text="Price"/>
            <HeaderCell
              text="Chain"
              className="col-votes"
            />
            <HeaderCell
              text="Favorite"
              hidden
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.id}>
              <TableCell 
                sx={{
                  left: 0,
                  ...stickyColSx
                }}
              >{i + 1}</TableCell>
              <CoinCell
                sx={{
                  left: '40px',
                  ...stickyColSx
                }}
                id={row.id}
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
