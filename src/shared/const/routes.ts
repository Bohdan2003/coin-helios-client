export const ROUTES = {
  HOME: '/',
  COIN: (id: string | number) => `/coin/${id}`,
  NEWS: '/news',
  NEW: (id: string | number) => `/news/${id}`,
  MARKETS: (id: string | number) => `/coin/${id}#markets`,
  PROFILE: '/profile',
} as const;
