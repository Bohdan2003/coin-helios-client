export type ResponseWithPagination<T> = {
  page: number,
  limit: number,
  total_pages: number,
  total_items: number,
  data: T;
}