//utils
import { cn } from '@/utils/cn';
import {
  fieldLabelCls,
  fieldBottomBorderCls,
  fieldErrorCls,
} from '@/utils/consts/clsVariable';

export type TBaseTextFieldProps = {
  label?: string;
  icon?: React.ReactNode;
  error?: string | null;
  value?: string;
  placeholder?: string;
  fullWidth?: boolean;
  required?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputCls = 'leading-[20px] block w-full placeholder:[color:inherit] placeholder:opacity-[0.5] placeholder:font-medium outline-none';

export const BaseTextField: React.FC<TBaseTextFieldProps> = ({
  label,
  icon,
  error,
  fullWidth,
  required,
  className,
  ...otherProps
}) => {
  return (
    <div className={cn( className, 'font-inter', fullWidth && 'w-full' )}>
      <div className={cn(
        'relative',
        fieldBottomBorderCls,
        error && 'after:bg-orange',
      )}
      >
        {
          icon || label
            ?
            <label>
              {
                label &&
                <p className={fieldLabelCls}>
                  {label}{required && <span className="text-orange">*</span>}
                </p>
              }
              {
                icon &&
                <div className="absolute left-[8px] top-[11px]">
                  {icon}
                </div>
              }
              <input
                className={cn(
                  inputCls,
                  'py-[12px] pr-[10px]',
                  icon ? 'pl-[40px]' : 'pl-[10px]',
                )}
                type="text"
                {...otherProps}
              />
            </label>
            :
            <input
              className={cn(
                inputCls,
                'py-[12px] px-[10px]',
              )}
              type="text"
              {...otherProps}
            />
        }
      </div>
      {
        error && <p className={fieldErrorCls}>{error}</p>
      }
    </div>
  );
};