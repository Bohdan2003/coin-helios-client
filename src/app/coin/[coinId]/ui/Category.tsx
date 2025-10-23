//ui
import { Chip } from '@mui/material';
//utils
import { smallTitleCls } from '@/shared/lib/classNames';
import { cn } from '@/shared/lib/cn';

export const Category: React.FC<{ id: string, className?: string }> = ({
  id,
  className,
}) => {
  return (<div className={cn(className)}>
    <h4 className={cn(smallTitleCls, 'ml-[24px]')}>Category</h4>
    <div className="mt-[16px]">
      <Chip label="Other"/>
    </div>
  </div>);
};