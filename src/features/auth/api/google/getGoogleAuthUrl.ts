//api
import { apiClientGet } from '@/shared/api/apiClientGet';

export type TAuthUrl = {
  auth_url: string
}

export const getGoogleAuthUrl = async () =>
  apiClientGet<TAuthUrl>('auth/google/login-url/');