'use client';
//utils
import { cn } from '@/utils/cn';

type TIconProps = {
  active?: boolean,
  className?: string
}

export const ArrowIcon: React.FC<TIconProps> = ({ active, className }) => {
  return (
    <div className={cn(className)}>
      <svg
        className={cn( active ? 'fill-blue' : 'fill-black dark:fill-white')}
        width="12"
        height="8"
        viewBox="0 0 12 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0L6 5L11 0H9L6 3L3 0H1Z"/>
      </svg>

    </div>
  );
};