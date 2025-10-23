export type TFilterOption = {
  id: string,
  name: string,
}
export type TSortDir = 'asc' | 'desc' | null;
export type TSortKey = string | null;
export type TCoinPriceHistoryPeriod = '24h' | '7d' | '1m' | '3m' | '1y' | 'max';
export type TCoinChartPoint = {
  timestamp: string,
  price: number
}

export type TCoin = {
  id: string,
  name: string,
  symbol: string,
  market_cap: number,
  votes: number,
  percent_change_1h: number,
  percent_change_24h: number,
  percent_change_7d: number,
  price: number,
  price_chart_points: TCoinChartPoint[],
  chain: {
    name: string,
    icon: string
  },
  categories: string,
  icon: string,
  liked: boolean,
  saved: boolean
}

export type TCoinMarket = {
  exchange_name: string,
  exchange_uuid: string,
  price: string,
  volume_24h: string,
  url: string
}

export type TCoinFilters = {
  type: TFilterOption[],
  category: TFilterOption[],
  chain: TFilterOption[],
}

export type TCoinPriceHistory= {
  coin_id: string,
  period: TCoinPriceHistoryPeriod,
  points: TCoinChartPoint[]
}