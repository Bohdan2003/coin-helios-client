import { apiPostRequest } from '@/shared/api/apiClientPost';

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

export const getGoogleAuthTokens = async (code: string) =>
  apiPostRequest<TGoogleAuthTokens>('/auth/google/exchange/', { code });