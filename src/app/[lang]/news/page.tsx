//ui
import { LatestNewsSection } from '@/app/[lang]/news/_ui/LatestNewsSection';
import { OtherNewsSection } from '@/app/[lang]/news/_ui/OtherNewsSection/OtherNewsSection';
//types
import { TLocale } from '@/shared/i18n/dictionaries';

export default async function News({
  params
}: {
  params: Promise<{ lang: TLocale }>;
}) {
  const { lang } = await params;

  return (
    <>
      <LatestNewsSection
        lang={lang}
        className="mt-[38px]"
      />
      <OtherNewsSection className="mt-[60px]"/>
    </>
  );
}