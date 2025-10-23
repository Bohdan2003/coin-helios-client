//ui
import Image from 'next/image';
import { BaseLink } from '@/shared/ui/BaseLink';
//types
import { TNew } from '@/features/news/ui/NewsList/helper';
//utils
import { ROUTES } from '@/shared/const/routes';
import { titleCls } from '@/shared/lib/classNames';
import { cn } from '@/shared/lib/cn';

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
    'flex flex-col sm:flex-row',
    size === 'small'
      ? 'gap-[24px]'
      : 'md:flex-col gap-[16px]',
    className
  )}>
    <div className={cn(
      'rounded-[16px] overflow-hidden',
      'h-[250px] sm:h-[200px] md:h-full',
      'w-full sm:min-w-[250px] sm:max-w-[250px]',
      size === 'large' && 'md:max-w-[none]'
    )}>
      <Image
        className="object-cover w-full h-full"
        src={img}
        alt={title}
        height={size === 'small' ? 200 : 500}
        width={size === 'small' ? 250 : 925}
      />
    </div>
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