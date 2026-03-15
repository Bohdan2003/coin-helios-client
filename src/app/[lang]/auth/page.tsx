//ui
import { GoogleButton } from '@/features/auth/ui/GoogleButton';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';

export default async function Auth ({
  params,
}: {
  params: Promise<{ lang: TLocale }>
}) {
  const { lang } = await params;
  const d = await getDictionary(lang);

  return (<div className="mt-[20%] -translate-y-1/2 grid place-items-center gap-[20px]">
    <GoogleButton dictionary={{
      error: d.errors.error,
      googleButton: d.auth.googleButton
    }}/>
  </div>);
}