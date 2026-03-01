import { KEYS } from '@/shared/config/keys';

export type TGoogleAuthTokens = {
  access: string;
  refresh: string;
  user: {
    email: string;
    first_name: string;
    last_name: string;
    profile_picture: string;
  };
}

export const getGoogleAuthTokens = async (code: string): Promise<TGoogleAuthTokens> => {
  const response = await fetch(`${KEYS.API_URL}/auth/google/exchange/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });

  return response.json();
};