//hooks
import { useQuery } from '@tanstack/react-query';
import { useKeyChangeFetching } from '@/shared/api/useKeyChangeFetching';
//api
import { getCoinsList } from '@/features/coins/api/coinsList/getCoinsList';
import { coinsQueryKeys } from '@/features/coins/api/coinsQueryKeys';
//types
import type {
  TSortDir,
  TSortKey,
  TCoinsCategory
} from '@/features/coins/api/types';

export type TCoinsListQueryParams = {
  page: number;
  limit: number;
  sortKey?: TSortKey;
  sortDir?: TSortDir;
  search?: string;
  filter?: TCoinsCategory;
  categories?: string[];
  chains?: string[];
  types?: string[];
}

export const useCoinsListQuery = (params: TCoinsListQueryParams) => {
  const query = useQuery({
    queryKey: coinsQueryKeys.list(params),
    queryFn: () => getCoinsList({
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