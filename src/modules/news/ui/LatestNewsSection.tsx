//ui
import { LinkWithArrow } from '@/shared/ui/links/LinkWithArrow';
import { NewsList } from '@/modules/news/ui/NewsList/NewsList';
//utils
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/routes/routes';
import { bigTitleCls } from '@/shared/classNames/classNames';

export const LatestNewsSection: React.FC<{ className?: string }> = ({
  className
}) => {
  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-[16px] sm:gap-[20px]">
          <h3 className={bigTitleCls}>Latest News from the world of cryptocurrency</h3>
          <LinkWithArrow
            href={ROUTES.NEWS}
          >See more news</LinkWithArrow>
        </div>
        <div className="mt-[32px]">
          <NewsList/>
        </div>
      </div>
    </section>
  );
};