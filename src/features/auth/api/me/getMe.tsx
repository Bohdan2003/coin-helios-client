//api
import { apiClientGet } from '@/shared/api/apiClientGet';

type TUser = {
  email: string;
  first_name: string;
  last_name: string;
  profile_picture: string;
}

export const getMe = async () =>
  apiClientGet<{ user: TUser }>('auth/me/');