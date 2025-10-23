//ui
import { FavoriteCoinButton } from '@/shared/ui/buttons/FavoriteCoinButton';
import { LikeCoinButton } from '@/shared/ui/buttons/LikeCoinButton';
//utils
import { cn } from '@/shared/lib/cn';

export const IntroSection: React.FC<{ id: string, className?: string  }> = ({
  id,
  className
}) => {
  return (
    <section className={cn(
      'flex justify-between',
      className
    )}>
      <div className="flex">
        <div className="text-[32px]">
          <h1>Bitcoin</h1>
          <h2 className="opacity-50">BTC</h2>
        </div>
        <FavoriteCoinButton
          className="ml-[12px]"
          id={id}
        />
      </div>
      <LikeCoinButton id={id} votes={0}/>
    </section>
  );
};