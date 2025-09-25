//utils
import { cn } from '@/utils/cn';

export const StatusMessage: React.FC<{ message: string, className?: string, }> = ({
  message,
  className
}) => (
  <p className={cn('text-center opacity-50 py-[10px]', className)}>
    { message }
  </p>
);