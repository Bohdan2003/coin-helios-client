import { cn } from '@/utils/cn';

export const PercentChange: React.FC<{ className?: string, percent: number }> = ({ className, percent }) => {
  const isPositive = percent > 0;
  const text = `${isPositive ? '+' : ''}${percent}%`;

  return (
    <>
      {
        percent
          ?
          <span
            className={cn(className, isPositive ? 'text-green' : 'text-orange')}
          >{text}</span>
          :
          <span className={cn(className, 'text-green')}>+0</span>
      }
    </>
  );
};
