import { getDictionary } from '@/shared/i18n/dictionaries';
import { TLocale } from '@/shared/i18n/dictionaries';
import { GoogleCallbackClient } from '@/app/[lang]/auth/google/callback/_ui/GoogleCallbackClient';

export default async function GoogleCallbackPage({
  params
}: {
  params: Promise<{ lang: TLocale }>;
}) {
  const { lang } = await params;
  const { errors } = await getDictionary(lang);

  return (
    <GoogleCallbackClient
      authRequiredText={errors.authRequired}
      errorText={errors.error}
    />
  );
}