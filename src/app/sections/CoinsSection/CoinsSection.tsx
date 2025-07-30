'use client'
//hooks
import { useStore } from "@/app/sections/CoinsSection/store";
import { useQuery } from "@tanstack/react-query";
//api
import { getCoins } from "@/modules/coins/CoinsApi";
//ui
import Pagination from '@mui/material/Pagination';
import { StickyHeadCoinsTable } from "@/ui/tables/StickyHeadCoinsTable";
import { SearchField } from "@/ui/filters/SearchField";
import { CustomTabs } from "@/ui/filters/CustomTabs";
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

  if(isPending) return <div className="text-center mt-[76px]">Loading...</div>
  if(isError) return <div className="text-center mt-[76px]">Error...</div>

  return (<section className="mt-[76px]">
    <div className="container">
      <h3 className="hidden">Coins</h3>
      <div className="flex justify-between items-center">
        <CustomTabs
          tabs={categories}
          tab={category}
          setTab={(category) => {
            setCategory(category);
            setPage(1);
          }}
        />
        <SearchField
          label="Search crypto"
          setSearch={setSearch}
        />
      </div>
      <StickyHeadCoinsTable
        className="mt-[16px]"
        sort={sort}
        setSort={setSort}
        rows={data?.coins}
      />
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