export const ROUTES = {
  HOME: '/',
  COIN: (id: string | number) => `/coin/${id}`,
  NEWS: '/news',
  NEW: (id: string | number) => `/news/${id}`,
  PROFILE: '/profile',
} as const;
