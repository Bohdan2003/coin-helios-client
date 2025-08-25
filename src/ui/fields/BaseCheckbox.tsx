//ui
import { Checkbox } from '@mui/material';
//utils
import { cn } from '@/utils/cn';
import { fieldErrorCls } from '@/utils/consts/clsVariable';

export type TBaseCheckboxProps = {
  label?: React.ReactNode;
  error?: string | null;
  value?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BaseCheckbox: React.FC<TBaseCheckboxProps> = ({
  label,
  error,
  className,
  value,
  ...otherProps
}) => {
  return (
    <div className={cn( className, 'font-inter')}>
      {
        label
          ?
          <label className="flex items-center gap-[2px] font-inter">
            <Checkbox checked={value} {...otherProps} />
            <div>
              {label}
            </div>
          </label>
          :
          <Checkbox checked={value} {...otherProps} />
      }
      {
        error &&
        <p className={fieldErrorCls}>{error}</p>
      }
    </div>
  );
};