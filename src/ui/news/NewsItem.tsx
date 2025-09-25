//ui
import Image from 'next/image';
import { BaseLink } from '@/ui/BaseLink';
//types
import { TNew } from '@/ui/news/helper';
//utils
import { ROUTES } from '@/utils/router';
import { titleCls } from '@/utils/consts/clsVariable';
import { cn } from '@/utils/cn';

type TNewsItemProps = {
  size?: 'large' | 'small',
  className?: string | boolean;
} & TNew;

export const NewsItem: React.FC<TNewsItemProps> = ({
  size = 'small',
  className,
  id,
  title,
  text,
  img
}) => {
  return (<li className={cn(
    'flex',
    size === 'small'
      ? 'flex-col sm:flex-row gap-[24px]'
      : 'flex-col sm:flex-row md:flex-col gap-[16px]',
    className
  )}>
    <Image
      className={cn(
        'rounded-[16px] object-cover',
        size === 'small'
          ? 'h-[250px] sm:h-[200px] w-full sm:w-[250px]'
          : 'h-[250px] sm:h-[200px] md:h-full max-h-[524px] w-full sm:w-[250px] md:w-full',
      )}
      src={img}
      alt={title}
      height={size === 'small' ? 200 : 500}
      width={size === 'small' ? 250 : 925}
    />
    <div className="flex flex-col justify-between gap-[20px]">
      <div>
        <h4 className={cn(titleCls, 'line-clamp-2')}>{title}</h4>
        <p className={cn(
          size === 'small'
            ? 'mt-[8px]'
            : 'mt-[16px]',
          'opacity-60 line-clamp-3'
        )}>{text}</p>
      </div>
      <BaseLink
        href={ROUTES.NEW(id)}
      >Read in full</BaseLink>
    </div>
  </li>);
};