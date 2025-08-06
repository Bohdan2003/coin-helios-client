'use client';
//hooks
import { useColorScheme } from '@mui/material/styles';
//utils
import { cn } from '@/utils/cn';

type TIconProps = {
  active?: boolean,
  className?: string
}

export const ArrowIcon: React.FC<TIconProps> = ({ active, className }) => {
  const { mode } = useColorScheme();

  return (
    <div className={cn(className)}>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill={ active ? 'var(--blue)' : mode === 'dark' ? 'var(--white)' : 'var(--black)' }
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0L6 5L11 0H9L6 3L3 0H1Z"/>
      </svg>

    </div>
  );
};