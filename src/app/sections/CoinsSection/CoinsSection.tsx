'use client'
//hooks
import { useStore } from "@/app/sections/CoinsSection/store";
import { useQuery } from "@tanstack/react-query";
//api
import { getCoins } from "@/modules/coins/CoinsApi";
//ui
import Pagination from '@mui/material/Pagination';
import { StickyHeadCoinsTable } from "@/ui/tables/StickyHeadCoinsTable";
import { SearchField } from "@/ui/fields/SearchField";
import { CustomTabs } from "@/ui/CustomTabs";
//helper
import { getCategories } from "@/app/sections/CoinsSection/helper";

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
  const { data, isPending, isError } = useQuery({
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
  }

  if(isPending) return <div className="text-center opacity-50">Loading...</div>
  if(isError) return <div className="text-center opacity-50">Error...</div>

  return (<section>
    <div className="container">
      <h3 className="hidden">Coins</h3>
      <div className="flex justify-between items-end">
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
          setSort={setSort}
          setPage={setPage}
          rows={data?.coins}
        />
      </div>
      {
        data.total_pages > 1 &&
        <Pagination
          className="mt-[36px] flex justify-center"
          count={data.total_pages}
          page={page}
          onChange={(_, page) => setPage(page)}
        />
      }
    </div>
  </section>)
}