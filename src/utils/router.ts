export const ROUTES = {
  HOME: '/',
  COIN: (coinId: string | number) => `/coin/${coinId}`,
  NEWS: '/news',
  NEW: (newId: string | number) => `/news/${newId}`,
  PROFILE: '/profile',
} as const;
