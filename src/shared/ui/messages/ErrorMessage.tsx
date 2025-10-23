//utils
import { cn } from '@/shared/lib/cn';

export const ErrorMessage: React.FC<{ message?: string, className?: string, }> = ({
  message,
  className
}) => (
  <span className={cn('block text-center opacity-50 py-[10px]', className)}>
    { message || 'Oops! Something went wrong.' }
  </span>
);