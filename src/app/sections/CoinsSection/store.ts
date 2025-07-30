import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { TSort } from "@/modules/coins/CoinsApi";

type Store = {
  page: number;
  sort: TSort;
  search: string;
  category: string;
  setPage: (page: number) => void;
  setSort: (key : TSort['key'], dir: TSort['dir']) => void;
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;
};

export const useStore = create<Store>()(
  immer((set) => ({
    page: 1,
    sort: {
      dir: null,
      key: null,
    },
    search: '',
    category: 'all',
    setPage: (page) => set({ page }),
    setSort: (key, dir) => set({ sort: { key, dir } }),
    setSearch: (search) => set({ search }),
    setCategory: (category) => set({ category }),
  }))
);
