'use client';
//hooks
import {
  useState,
  useCallback,
} from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { useCoinsListQuery } from '@/features/coins/api/coinsList/useCoinsListQuery';
//ui
import { CoinsFiltersPopover } from '@/app/[lang]/_ui/CoinsSection/CoinsFiltersPopover/CoinsFiltersPopover';
import Pagination from '@mui/material/Pagination';
import { CoinsStickyHeadTable } from '@/features/coins/ui/CoinsStickyHeadTable';
import { BaseTabs } from '@/shared/ui/tabs/BaseTabs';
import { BaseTextField } from '@/shared/ui/fields/BaseTextField';
import { Button } from '@mui/material';
//icons
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
//types
import { TTab } from '@/shared/ui/tabs/BaseTabs';
import { TDictionary } from '@/shared/i18n/dictionaries';
import type {
  TSortDir,
  TSortKey,
  TCoinsCategory
} from '@/features/coins/api/types';
import type { TSelectedState } from '@/app/[lang]/_ui/CoinsSection/CoinsFiltersPopover/CoinsFiltersPopover';
//utils
import { cn } from '@/shared/lib/cn';

const limit = 20;

export const CoinsTable: React.FC<{
  filters: TTab[];
  dictionary: {
    tables: TDictionary['tables'];
    errors: TDictionary['errors'];
  }
}> = ({ dictionary: { tables: d, errors }, filters }) => {
  //filter popover
  const [ isFiltersOpen, setIsFiltersOpen ] = useState(false);
  const [ anchorEl, setAnchorEl ] = useState<HTMLElement | null>(null);
  //pagination
  const [ page, setPage ] = useState(1);
  //filters
  const [ filter, setFilter ] = useState<TCoinsCategory>('all');
  const [ categories, setCategories ] = useState<string[]>([]);
  const [ types, setTypes ] = useState<string[]>([]);
  const [ chains, setChains ] = useState<string[]>([]);
  //search
  const [ search, setSearch ] = useState('');
  //sort
  const [ sortKey, setSortKey ] = useState<TSortKey>(null);
  const [ sortDir, setSortDir ] = useState<TSortDir>(null);

  //query
  const {
    data,
    isLoading,
    isError,
    isKeyChangeFetching
  } = useCoinsListQuery({ page, sortKey, sortDir, search, filter, categories, chains, types, limit });

  //handlers
  const handleSortChange = useCallback((key: TSortKey, dir: TSortDir) => {
    setSortKey(key);
    setSortDir(dir);
    setPage(1);
  }, [] );

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
    <div className="pb-[60px] relative">
      <div className={cn(
        isLoading && 'opacity-50 position-relative pointer-events-none',
        'flex flex-col md:flex-row gap-[20px] md:gap-[60px] justify-between md:items-end'
      )}>
        <BaseTabs
          activeTab={filter}
          tabs={filters}
          onTabChange={(filter) => {
            setFilter(filter);
            setPage(1);
          }}
        />
        <div className="-order-1 md:order-1 flex gap-[40px] md:gap-[20px] justify-between items-center">
          <Button
            startIcon={<FilterAltOutlinedIcon/>}
            onClick={handleOpenFilters}
          >
            { d['filterButton'] }
          </Button>
          <CoinsFiltersPopover
            anchorEl={anchorEl}
            isOpen={isFiltersOpen}
            onClose={handleCloseFilters}
            onApply={handleApplyFilters}
          />
          <BaseTextField
            icon={<SearchIcon color="primary"/>}
            placeholder={ d['searchInput'] }
            onChange={(e) => {
              handleSearchChangeDebounced(e.target.value);
            }}
          />
        </div>
      </div>
      <CoinsStickyHeadTable
        className="mt-[16px] max-h-[60vh] md:max-h-none overflow-scroll"
        dictionary={{ th: d['th'], errors }}
        rows={data?.data.coin_list}
        sortKey={sortKey}
        sortDir={sortDir}
        isLoading={isLoading}
        isFetching={isKeyChangeFetching}
        isError={isError}
        limit={limit}
        onSortChange={handleSortChange}
      />
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
};