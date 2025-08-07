import { cn } from '@/utils/cn';
import { Checkbox } from '@mui/material';

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
        error && <p className="text-[14px] text-orange ml-[4px] mt-[4px]">{error}</p>
      }
    </div>
  );
};