//ui
import { NewsList } from '@/features/news/ui/NewsList/NewsList';
//libs
import { cn } from '@/shared/lib/cn';
//classNames
import { bigTitleCls } from '@/shared/classNames';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';

export const LatestNewsSection: React.FC<{
  lang: TLocale;
  className?: string;
}> = async ({
  lang,
  className
}) => {
  const { 'latest-news': d } = await getDictionary(lang);

  return (
    <section className={cn(className)}>
      <div className="container">
        <h3 className={bigTitleCls}>{d.title}</h3>
        <div className="mt-[32px]">
          <NewsList readInFullLinkText={d.readInFull}/>
        </div>
      </div>
    </section>
  );
};