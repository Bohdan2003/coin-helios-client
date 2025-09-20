//ui
import { Chip } from '@mui/material';
//utils
import { smallTitleCls } from '@/utils/consts/clsVariable';
import { cn } from '@/utils/cn';

export const Category: React.FC = () => {
  return (<div>
    <h4 className={cn(smallTitleCls, 'ml-[24px]')}>Category</h4>
    <div className="mt-[16px]">
      <Chip
        label="Other"
      />
    </div>
  </div>);
};