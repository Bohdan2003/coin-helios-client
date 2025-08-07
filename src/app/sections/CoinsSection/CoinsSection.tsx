'use client';
//hooks
import { useStore } from '@/app/sections/CoinsSection/store';
import { useQuery } from '@tanstack/react-query';
//api
import { getCoins } from '@/modules/coins/CoinsApi';
//ui
import Pagination from '@mui/material/Pagination';
import { StickyHeadCoinsTable } from '@/ui/tables/StickyHeadCoinsTable';
import { SearchField } from '@/ui/fields/SearchField';
import { CustomTabs } from '@/ui/CustomTabs';
//helper
import { getCategories } from '@/app/sections/CoinsSection/helper';
//utils
import { cn } from '@/utils/cn';

export const CoinsSection: React.FC = () => {
  const categories = getCategories();
  const {
    page,
    sort,
    search,
    category,
    setPage,
    setSort,
    setSearch,
    setCategory
  } = useStore();
  const {
    data,
    isPending,
    isLoading,
    isError
  } = useQuery({
    queryKey: [ 'coins', page, sort, search, category ],
    queryFn: () => getCoins({
      page,
      sort_by: sort.key,
      order: sort.dir, search,
      filter: category
    }),
    placeholderData: previous => previous,
  });

  const onSearchChange = (search: string) => {
    setSearch(search);
    setPage(1);
  };

  return (
    <section>
      <div className="container pb-[60px] relative">
        <h3 className="hidden">Coins</h3>
        <div className={cn(
          isLoading && 'opacity-50 position-relative',
          'flex justify-between items-end'
        )}>
          <CustomTabs
            tabs={categories}
            tab={category}
            setTab={(category) => {
              setCategory(category);
              setPage(1);
            }}
          />
          <SearchField
            className="w-[250px]"
            placeholder="Search crypto"
            onChange={onSearchChange}
          />
        </div>
        <div className="mt-[16px]">
          <StickyHeadCoinsTable
            sort={sort}
            loading={isLoading}
            pending={isPending}
            error={isError}
            setSort={setSort}
            setPage={setPage}
            rows={data?.coins}
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