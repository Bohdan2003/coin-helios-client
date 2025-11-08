'use client';
//hooks
import {
  useState,
  useCallback
} from 'react';
import { useMarketsQuery } from '@/modules/coins/api/coinMarkets/useMarketsQuery';
//ui
import { MarketsTable } from '@/app/[lang]/coin/[coinId]/_ui/MarketsSection/MarketsTable';
import Pagination from '@mui/material/Pagination';
//types
import type {
  TSortDir,
  TSortKey
} from '@/modules/coins/api/types';
//utils
import { cn } from '@/shared/lib/cn';
import { smallTitleCls } from '@/shared/classNames/classNames';

export const MarketsSection: React.FC<{ id: string, className?: string }> = ({
  id,
  className
}) => {
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

  //handlers
  const handleSortChange = useCallback((key: TSortKey, dir: TSortDir) => {
    setSortKey(key);
    setSortDir(dir);
    setPage(1);
  }, [] );

  return (
    <section
      className={cn(
        'pb-[60px] relative',
        className
      )}
      id="markets"
    >
      <h3 className={smallTitleCls}>Markets</h3>
      <div className="mt-[16px] overflow-scroll md:overflow-visible">
        <MarketsTable
          rows={data?.data}
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