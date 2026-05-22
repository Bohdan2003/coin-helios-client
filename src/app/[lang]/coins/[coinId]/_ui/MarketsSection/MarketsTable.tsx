'use client';

//hooks
import { useState } from 'react';
import { useMarketsQuery } from '@/features/coins/api/coinMarkets/useMarketsQuery';
//ui
import { StickyHeedTable } from '@/shared/ui/tables/StickyHeedTable';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { SortableHeaderCell } from '@/shared/ui/tables/cells/SortableHeaderCell';
import { BuyCell } from '@/shared/ui/tables/cells/BuyCell';
import { HeaderCell } from '@/shared/ui/tables/cells/HeaderCell';
import Pagination from '@mui/material/Pagination';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
import {
  TSortDir,
  TSortKey
} from '@/features/coins/api/types';
//utils
import { memo } from 'react';
import { NumberFormatter } from '@/shared/lib/NumberFormatter';

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
const limit = 6;

export const MarketsTable: React.FC<{
  id: string;
  dictionary: {
    errors: TDictionary['errors'],
    th: TDictionary['tables']['th']
  }
}> = memo(({ id, dictionary: d }) => {
  //pagination
  const [ page, setPage ] = useState(1);
  //sort
  const [ sortKey, setSortKey ] = useState<TSortKey>(null);
  const [ sortDir, setSortDir ] = useState<TSortDir>(null);

  const {
    data,
    isLoading,
    isKeyChangeFetching,
    isError
  } = useMarketsQuery({
    id,
    page,
    sortKey,
    sortDir,
  });

  const handleSortChange = (key: TSortKey, dir: TSortDir) => {
    setSortKey(key);
    setSortDir(dir);
    setPage(1);
  };

  const handleBuy = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pb-[60px] relative">
      <div className="overflow-scroll md:overflow-visible">
        <StickyHeedTable
          dictionary={ d.errors }
          rowsAmount={data?.data?.length}
          colsAmount={colsAmount}
          isLoading={isLoading}
          isFetching={isKeyChangeFetching}
          isError={isError}
          limit={limit}
          skeletonHeight={31.17}
          head={
            <TableRow>
              <HeaderCell text={ d.th.exchanges }/>
              <SortableHeaderCell
                text={ d.th.price }
                columnKey="price"
                sortKey={sortKey}
                sortDir={sortDir}
                onChange={handleSortChange}
                isLoading={isLoading}
              />
              <SortableHeaderCell
                text={ d.th['24HTradingVolume'] }
                columnKey="volume_24h"
                sortKey={sortKey}
                sortDir={sortDir}
                onChange={handleSortChange}
                isLoading={isLoading}
              />
              <HeaderCell
                text={ d.th.buy }
                hidden
              />
            </TableRow>
          }
          body={
            <>
              {
                data?.data?.map(row => (
                  <TableRow key={row.exchange_uuid}>
                    <TableCell sx={firstColSx}>{ row.exchange_name }</TableCell>
                    <TableCell className="opacity-80">
                      {NumberFormatter.getReadablePrice(+row.price, d.errors.noData)}
                    </TableCell>
                    <TableCell className="opacity-80">
                      {NumberFormatter.getReadablePrice(+row.volume_24h, d.errors.noData)}
                    </TableCell>
                    <BuyCell onClick={() => { handleBuy(row.url); }}/>
                  </TableRow>
                ))
              }
            </>
          }
        />
      </div>
      {
        !!data?.total_pages &&
        data.total_pages > 1 &&
        <div className="flex justify-center absolute bottom-0 left-0 right-0">
          <Pagination
            disabled={isLoading}
            count={data.total_pages}
            page={page}
            onChange={(_, page) => setPage(page)}
          />
        </div>
      }
    </div>
  );
});

MarketsTable.displayName = 'MarketsTable';