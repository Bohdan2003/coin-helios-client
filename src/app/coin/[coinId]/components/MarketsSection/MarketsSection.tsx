'use client';
//hooks
import {
  useState,
  useMemo,
  useCallback
} from 'react';
import { useKeyChangeFetching } from '@/utils/useKeyChangeFetching';
import { useQuery } from '@tanstack/react-query';
//ui
import { MarketsTable } from '@/app/coin/[coinId]/components/MarketsSection/MarketsTable';
import Pagination from '@mui/material/Pagination';
//types
import type { TSortDir, TSortKey } from '@/modules/coins/CoinsApi';
//utils
import { smallTitleCls } from '@/utils/consts/clsVariable';
import { getCoinMarkets } from '@/modules/coins/CoinsApi';

export const MarketsSection: React.FC<{ id: string }> = ({ id }) => {
  //pagination
  const [ page, setPage ] = useState(1);
  //sort
  const [ sortKey, setSortKey ] = useState<TSortKey>(null);
  const [ sortDir, setSortDir ] = useState<TSortDir>(null);

  const {
    data,
    isLoading,
    isFetching,
    isError
  } = useQuery({
    queryKey: ['markets', id, page, sortKey, sortDir],
    queryFn: () => getCoinMarkets({ id }),
    placeholderData: previous => previous,
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true
  });

  //key change fetching
  const queryKeyStr = useMemo(() => JSON.stringify(
    [id, page, sortKey, sortDir]),
  [id, page, sortKey, sortDir]
  );
  const isKeyChangeFetching = useKeyChangeFetching(isFetching, queryKeyStr);

  //handlers
  const handleSortChange = useCallback((key: TSortKey, dir: TSortDir) => {
    setSortKey(key);
    setSortDir(dir);
    setPage(1);
  }, [] );

  return (
    <section className="pb-[60px] relative" id="markets">
      <h3 className={smallTitleCls}>Markets</h3>
      <div className="mt-[16px]">
        <MarketsTable
          rows={data?.markets}
          rowsAmount={6}
          sortKey={sortKey}
          sortDir={sortDir}
          isLoading={isLoading}
          isFetching={isKeyChangeFetching}
          isError={isError}
          onSortChange={handleSortChange}
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
    </section>
  );
};