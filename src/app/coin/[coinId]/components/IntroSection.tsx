//ui
import { FavoriteCoinButton } from '@/ui/buttons/FavoriteCoinButton';
import { LikeCoinButton } from '@/ui/buttons/LikeCoinButton';

export const IntroSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section className="flex justify-between">
      <div className="flex">
        <div className="text-[32px]">
          <h1>Bitcoin</h1>
          <h3 className="opacity-50">BTC</h3>
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