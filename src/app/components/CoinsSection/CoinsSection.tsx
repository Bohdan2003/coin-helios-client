'use client';
//hooks
import { useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { useQuery } from '@tanstack/react-query';
//api
import { getCoins } from '@/modules/coins/CoinsApi';
//ui
import Pagination from '@mui/material/Pagination';
import { StickyHeadCoinsTable } from '@/ui/tables/StickyHeadCoinsTable';
import { BaseTabs } from '@/ui/tabs/BaseTabs';
import { BaseTextField } from '@/ui/fields/BaseTextField';
//icons
import SearchIcon from '@mui/icons-material/Search';
//helper
import { getCategories } from '@/app/components/CoinsSection/helper';
//utils
import { cn } from '@/utils/cn';
//types
import type { TSortDir, TSortKey } from '@/modules/coins/CoinsApi';

export const CoinsSection: React.FC = () => {
  const categories = getCategories();

  const [ page, setPage ] = useState(1);
  const [ category, setCategory ] = useState('all');
  const [ search, setSearch ] = useState('');
  const [ sortKey, setSortKey ] = useState<TSortKey>(null);
  const [ sortDir, setSortDir ] = useState<TSortDir>(null);

  const {
    data,
    isPending,
    isLoading,
    isError
  } = useQuery({
    queryKey: [ 'coins', page, sortKey, sortDir, search, category ],
    queryFn: () => getCoins({
      page,
      sort_by: sortKey,
      order: sortDir,
      search,
      filter: category
    }),
    placeholderData: previous => previous,
  });

  const sortCoins = (key: TSortKey, dir: TSortDir) => {
    setSortKey(key);
    setSortDir(dir);
    setPage(1);
  };

  const debouncedSearchCoins = useDebounceCallback((search: string) => {
    setSearch(search);
    setPage(1);
  }, 400);

  return (
    <section>
      <div className="container pb-[60px] relative">
        <h3 className="hidden">Coins</h3>
        <div className={cn(
          isLoading && 'opacity-50 position-relative',
          'flex justify-between items-end'
        )}>
          <div className="hidden md:block">
            <BaseTabs
              activeTab={category}
              tabs={categories}
              onTabChange={(category) => {
                setCategory(category);
                setPage(1);
              }}
            />
          </div>
          <BaseTextField
            icon={<SearchIcon color="primary"/>}
            placeholder="Search crypto"
            onChange={(e) => {
              debouncedSearchCoins(e.target.value);
            }}
          />
        </div>
        <div className="mt-[16px] max-h-[60vh] md:max-h-none overflow-scroll md:overflow-visible">
          <StickyHeadCoinsTable
            rows={data?.coins}
            rowsAmount={50}
            sortKey={sortKey}
            sortDir={sortDir}
            isLoading={isLoading}
            isPending={isPending}
            isError={isError}
            onSortChange={sortCoins}
          />
        </div>
        {
          !!data?.total_pages &&
          data.total_pages > 1 &&
          <Pagination
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            count={data.total_pages}
            page={page}
            onChange={(_, page) => setPage(page)}
          />
        }
      </div>
    </section>
  );
};