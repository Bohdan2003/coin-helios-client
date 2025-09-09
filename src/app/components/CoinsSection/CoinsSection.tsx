'use client';
//hooks
import {
  useState,
  useCallback
} from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { useQuery } from '@tanstack/react-query';
//modules
import { getCoins } from '@/modules/coins/CoinsApi';
//ui
import { CoinFiltersPopover } from '@/app/components/CoinsSection/CoinFiltersPopover/CoinFiltersPopover';
import Pagination from '@mui/material/Pagination';
import { StickyHeadCoinsTable } from '@/ui/tables/StickyHeadCoinsTable';
import { BaseTabs } from '@/ui/tabs/BaseTabs';
import { BaseTextField } from '@/ui/fields/BaseTextField';
import { Button } from '@mui/material';
//icons
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
//helper
import { getFilters } from '@/app/components/CoinsSection/helper';
//utils
import { cn } from '@/utils/cn';
//types
import type { TSortDir, TSortKey } from '@/modules/coins/CoinsApi';
import type { TSelectedState } from '@/app/components/CoinsSection/CoinFiltersPopover/CoinFiltersPopover';

const limit = 20;

export const CoinsSection: React.FC = () => {
  //tabs
  const filters = getFilters();
  //filters
  const [ isFiltersOpen, setIsFiltersOpen ] = useState(false);
  const [ anchorEl, setAnchorEl ] = useState<HTMLElement | null>(null);

  const [ page, setPage ] = useState(1);
  const [ filter, setFilter ] = useState('all');
  const [ categories, setCategories ] = useState<string[]>([]);
  const [ types, setTypes ] = useState<string[]>([]);
  const [ chains, setChains ] = useState<string[]>([]);
  const [ search, setSearch ] = useState('');
  const [ sortKey, setSortKey ] = useState<TSortKey>(null);
  const [ sortDir, setSortDir ] = useState<TSortDir>(null);

  const {
    data,
    isPending,
    isLoading,
    isError
  } = useQuery({
    queryKey: [ 'coins', page, sortKey, sortDir, search, filter, categories, chains, types ],
    queryFn: () => getCoins({
      page,
      sort_by: sortKey,
      category_ids: categories,
      coin_type_ids: types,
      chain_names: chains,
      order: sortDir,
      search,
      filter,
      limit
    }),
    placeholderData: previous => previous,
  });
  console.log('render');

  const handleSortChange = useCallback((key: TSortKey, dir: TSortDir) => {
    setSortKey(key);
    setSortDir(dir);
    setPage(1);
  },
  [] );

  const handleSearchChangeDebounced = useDebounceCallback((search: string) => {
    setSearch(search);
    setPage(1);
  }, 400);
  
  const handleOpenFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    setIsFiltersOpen(true);
  };
  
  const handleCloseFilters = useCallback(() =>
    setIsFiltersOpen(false),
  [] );

  const handleApplyFilters = useCallback((selected: TSelectedState) => {
    setCategories(selected.category);
    setTypes(selected.type);
    setChains(selected.chain);
  }, [] );

  return (
    <section>
      <div className="container pb-[60px] relative">
        <h3 className="hidden">Coins</h3>
        <div className={cn(
          isLoading && 'opacity-50 position-relative',
          'flex flex-col sm:flex-row gap-[40px] sm:gap-[60px] justify-between sm:items-end'
        )}>
          <BaseTabs
            activeTab={filter}
            tabs={filters}
            onTabChange={(filter) => {
              setFilter(filter);
              setPage(1);
            }}
          />
          <div className="-order-1 sm:order-1 flex gap-[40px] sm:gap-[20px] justify-between items-center">
            <Button
              startIcon={<FilterAltOutlinedIcon/>}
              onClick={handleOpenFilters}
            >
              Filter
            </Button>
            <CoinFiltersPopover
              anchorEl={anchorEl}
              isOpen={isFiltersOpen}
              onClose={handleCloseFilters}
              onApply={handleApplyFilters}
            />
            <BaseTextField
              className="-order-1 sm:order-1"
              icon={<SearchIcon color="primary"/>}
              placeholder="Search crypto"
              onChange={(e) => {
                handleSearchChangeDebounced(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mt-[16px] max-h-[60vh] md:max-h-none overflow-scroll md:overflow-visible">
          <StickyHeadCoinsTable
            rows={data?.data}
            rowsAmount={limit}
            sortKey={sortKey}
            sortDir={sortDir}
            isLoading={isLoading}
            isPending={isPending}
            isError={isError}
            onSortChange={handleSortChange}
          />
        </div>
        {
          !!data?.total_pages &&
          data.total_pages > 1 &&
          <div className="flex justify-center absolute bottom-0 left-0 right-0">
            <Pagination
              count={data.total_pages}
              page={page}
              onChange={(_, page) => setPage(page)}
            />
          </div>
        }
      </div>
    </section>
  );
};