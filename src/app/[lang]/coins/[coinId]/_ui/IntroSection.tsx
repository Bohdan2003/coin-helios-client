//ui
import { FavoriteButton } from '@/features/coins/ui/FavoriteButton';
import { LikeButton } from '@/features/coins/ui/LikeButton';
//utils
import { getCoinInfo } from '@/features/coins/api/coin/getCoinInfo';
import { cn } from '@/shared/lib/cn';

export const IntroSection: React.FC<{
  id: string,
  className?: string
}> = async ({
  id,
  className
}) => {
  const data = await getCoinInfo({ id });

  return (
    <section className={cn(
      'flex justify-between',
      className
    )}>
      <div className="flex">
        <div className="text-[32px]">
          <h1>{ data.name }</h1>
          <h2 className="opacity-50">{ data.symbol }</h2>
        </div>
        <FavoriteButton
          className="ml-[12px]"
          id={id}
        />
      </div>
      <LikeButton id={id} votes={0}/>
    </section>
  );
};