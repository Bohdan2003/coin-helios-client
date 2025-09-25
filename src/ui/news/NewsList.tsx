'use client';
//ui
import { NewsItem } from '@/ui/news/NewsItem';
//helper
import { getNews } from '@/ui/news/helper';

export const NewsList: React.FC = () => {
  const data = getNews();

  return (<ul className="grid md:grid-cols-2 lg:grid-cols-[60%_1fr] gap-x-[20px] gap-y-[40px]">
    {data.map((item, i) => (
      <NewsItem
        className={i === 0 && 'row-span-3'}
        size={i === 0 ? 'large' : 'small'}
        key={item.id}
        id={item.id}
        title={item.title}
        text={item.text}
        img={item.img}
      />
    ))}
  </ul>);
};