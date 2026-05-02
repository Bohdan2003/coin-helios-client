//api
import { apiClientGet } from '@/shared/api/apiClientGet';

export type TAuthUrl = {
  auth_url: string
}

export const getGoogleAuthUrl = async () =>
  apiClientGet<TAuthUrl>('user_api/auth/google/login-url/');