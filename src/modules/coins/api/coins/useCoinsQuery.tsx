//hooks
import { useQuery } from '@tanstack/react-query';
import { useKeyChangeFetching } from '@/shared/api/useKeyChangeFetching';
//api
import { getCoins } from '@/modules/coins/api/coins/getCoins';
//types
import type { TSortDir, TSortKey } from '@/modules/coins/api/types';

type TCoinsParams = {
  page: number;
  limit: number;
  sortKey: TSortKey;
  sortDir: TSortDir;
  search: string;
  filter: string;
  categories: string[];
  chains: string[];
  types: string[];
}

export const useCoinsQuery = (params: TCoinsParams) => {
  const query = useQuery({
    queryKey: [ 'coins', params ],
    queryFn: () => getCoins({
      page: params.page,
      sort_by: params.sortKey,
      category_ids: params.categories,
      coin_type_ids: params.types,
      chain_names: params.chains,
      order: params.sortDir,
      search: params.search,
      filter: params.filter,
      limit: params.limit
    }),
    placeholderData: previous => previous,
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true
  });

  //key change fetching
  const queryKeyStr = JSON.stringify(params);
  const isKeyChangeFetching = useKeyChangeFetching(query.isFetching, queryKeyStr);

  return {
    isKeyChangeFetching,
    ...query
  };
};