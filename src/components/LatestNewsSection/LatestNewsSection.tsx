//ui
import { BaseLink } from '@/ui/BaseLink';
import { NewsList } from '@/ui/news/NewsList';
//utils
import { ROUTES } from '@/utils/routes';
import { bigTitleCls } from '@/utils/consts/clsVariable';

export const LatestNewsSection: React.FC = () => {
  return (
    <section>
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