export const profileQueryKeys = {
  all: ['profile'] as const,

  myCoins: () => [...profileQueryKeys.all, 'my-coins'] as const,
  promotions: () => [...profileQueryKeys.all, 'promotions'] as const,
};
