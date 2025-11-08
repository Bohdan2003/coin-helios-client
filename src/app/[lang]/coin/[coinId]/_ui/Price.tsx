//ui
import { PercentChange } from '@/shared/ui/PercentChange';
//utils
import { cn } from '@/shared/lib/cn';
import { NumberFormatter } from '@/shared/lib/NumberFormatter';

export const Price: React.FC<{ id: string, className?: string }> = ({
  id,
  className
}) => {
  const getReadablePrice = NumberFormatter.getReadablePrice.bind(NumberFormatter);

  return (
    <div className={cn(
      'font-inter grid gap-[16px]',
      className
    )}>
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
        <span className="opacity-70 text-center" >Range in 24hr.</span>
        <span>{ getReadablePrice(94468.89) }</span>
      </div>
    </div>
  );
};
