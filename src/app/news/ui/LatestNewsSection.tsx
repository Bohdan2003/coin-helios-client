//ui
import { NewsList } from '@/features/news/ui/NewsList/NewsList';
//libs
import { cn } from '@/shared/lib/cn';
//classNames
import { bigTitleCls } from '@/shared/lib/classNames';

export const LatestNewsSection: React.FC<{ className?: string }> = ({
  className
}) => {
  return (
    <section className={cn(className)}>
      <div className="container">
        <h3 className={bigTitleCls}>Latest News</h3>
        <div className="mt-[32px]">
          <NewsList/>
        </div>
      </div>
    </section>
  );
};