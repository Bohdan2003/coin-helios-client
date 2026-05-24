'use client';
//hooks
import { useCoinsListQuery } from '@/features/coins/api/coinsList/useCoinsListQuery';
//ui
import { SimpleTable } from '@/shared/ui/tables/SimpleTable';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ChainCell } from '@/shared/ui/tables/cells/ChainCell';
import { CoinCell } from '@/shared/ui/tables/cells/CoinCell';
import { PercentChangeCell } from '@/shared/ui/tables/cells/PercentChangeCell';
import { LikeCell } from '@/features/coins/ui/LikeCell';
import { SaveCell } from '@/features/coins/ui/SaveCell';
import { HeaderCell } from '@/shared/ui/tables/cells/HeaderCell';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';

const limit = 5;
const colsAmount = 7;
const stickyColSx = {
  position: 'sticky',
  zIndex: 10,
  backgroundColor: 'var(--palette-background-default)',
  '[data-dark] &': {
    backgroundColor: 'var(--palette-background-paper)',
  }
};

export const NewCoinsTable: React.FC<{
  dictionary: {
    th: TDictionary['tables']['th'];
    errors: TDictionary['errors'];
  };
}> = ({
  dictionary: { th, errors },
}) => {
  //query
  const {
    data,
    isLoading,
    isKeyChangeFetching,
    isError
  } = useCoinsListQuery({ page: 1, filter: 'top', limit });

  return (
    <SimpleTable
      dictionary={ errors }
      className="mt-[16px]"
      sx={{
        '& .col-chain': { display: { xs: 'table-cell', sm: 'none', lg: 'table-cell' } },
        '& .col-votes': { display: { xs: 'table-cell', sm: 'none', md: 'table-cell' } },
      }}
      isLoading={isLoading}
      isFetching={isKeyChangeFetching}
      isError={isError}
      rowsAmount={data?.data.coin_list.length}
      limit={limit}
      colsAmount={colsAmount}
      skeletonHeight={34}
      head={
        <TableRow>
          <HeaderCell text="#" sx={{
            left: 0,
            ...stickyColSx
          }}/>
          <HeaderCell
            text={th['coin']}
            sx={{
              left: '40px',
              ...stickyColSx
            }}
          />
          <HeaderCell text={th['24H']}/>
          <HeaderCell
            text={th['chain']}
            className="col-chain"
          />
          <HeaderCell text={th['price']}/>
          <HeaderCell
            text={th['votes']}
            className="col-votes"
          />
          <HeaderCell
            text={th['favorite']}
            hidden
          />
        </TableRow>
      }
      body={
        data?.data.coin_list.map((row, i) => (
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
            {/*<ChainCell*/}
            {/*  className="col-chain"*/}
            {/*  icon={row.icon}*/}
            {/*  name={row.chain.name}*/}
            {/*/>*/}
            <TableCell>---</TableCell>
            <TableCell className="opacity-80">${row.price}</TableCell>
            <LikeCell
              className="col-votes"
              votes={row.votes}
              liked={row.liked}
              id={row.id}
              dictionary={errors}
            />
            <SaveCell
              id={row.id}
              saved={row.saved}
              dictionary={errors}
            />
          </TableRow>
        ))
      }
    />
  );
};