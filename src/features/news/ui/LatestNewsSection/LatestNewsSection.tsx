//ui
import { BaseLink } from '@/shared/ui/BaseLink';
import { NewsList } from '@/features/news/ui/NewsList/NewsList';
//utils
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/const/routes';
import { bigTitleCls } from '@/shared/lib/classNames';

export const LatestNewsSection: React.FC<{ className?: string }> = ({
  className
}) => {
  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-[16px] sm:gap-[20px]">
          <h3 className={bigTitleCls}>Latest News from the world of cryptocurrency</h3>
          <BaseLink
            href={ROUTES.NEWS}
          >See more news</BaseLink>
        </div>
        <div className="mt-[32px]">
          <NewsList/>
        </div>
      </div>
    </section>
  );
};