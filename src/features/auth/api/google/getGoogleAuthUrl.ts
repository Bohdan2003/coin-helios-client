//api
import { apiGetRequest } from '@/shared/api/apiInstance';

export type TAuthUrl = {
  auth_url: string
}

export const getGoogleAuthUrl = async () =>
  apiGetRequest<TAuthUrl>('auth/google/login-url/');