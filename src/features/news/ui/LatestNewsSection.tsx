//ui
import { LinkWithArrow } from '@/shared/ui/links/LinkWithArrow';
import { NewsList } from '@/features/news/ui/NewsList/NewsList';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/routes';
import { bigTitleCls } from '@/shared/classNames';
import { getDictionary } from '@/shared/i18n/dictionaries';

export const LatestNewsSection: React.FC<{
  lang: TLocale,
  className?: string
}> = async ({
  lang,
  className
}) => {
  const { 'latest-news': d } = await getDictionary(lang);

  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-[16px] sm:gap-[20px]">
          <h3 className={bigTitleCls}>{ d.title }</h3>
          <LinkWithArrow
            href={ROUTES.NEWS}
          >{ d['seeMoreNews'] }</LinkWithArrow>
        </div>
        <div className="mt-[32px]">
          <NewsList readInFullLinkText={d['readInFull']}/>
        </div>
      </div>
    </section>
  );
};