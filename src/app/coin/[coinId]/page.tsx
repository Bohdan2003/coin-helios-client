//components
import { InfoSection } from '@/app/coin/[coinId]/components/InfoSection/InfoSection';

export default async function Coin({ params: { coinId } }: { params: { coinId: string } }) {
  console.log(coinId);

  return (
    <>
      <div className="mt-[40px] mx-auto px-[20px] max-w-[1400px] grid grid-cols-[2fr_1fr] gap-[20px]">
        <div>

        </div>
        <div>
          <InfoSection/>
        </div>
      </div>
    </>
  );
};