//ui
import { PercentChange } from '@/ui/PercentChange';
//utils
import { NumberFormatter } from '@/utils/NumberFormatter';

export const Price: React.FC = () => {
  const getReadablePrice = NumberFormatter.getReadablePrice.bind(NumberFormatter);

  return (
    <div className="font-inter grid gap-[16px]">
      <div className="flex justify-between items-center gap-[20px]">
        <span className="text-[20px]">{ getReadablePrice(94468.89) }</span>
        <PercentChange
          className="text-[20px]"
          percent={-0.64}
        />
      </div>
      <div className="h-[5px] rounded-full bg-gradient-to-r from-[#2CFAA1] to-[#1A24E9]"></div>
      <div className="flex justify-between items-center gap-[20px]">
        <span>{ getReadablePrice(94468.89) }</span>
        <span className="opacity-70">Range in 24hr.</span>
        <span>{ getReadablePrice(94468.89) }</span>
      </div>
    </div>
  );
};
