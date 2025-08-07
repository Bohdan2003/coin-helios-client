import { cn } from '@/utils/cn';

export type TBaseTextFieldProps = {
  icon?: React.ReactNode;
  error?: string | null;
  value?: string;
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputCls = 'w-full placeholder:[color:inherit] placeholder:opacity-[0.7] placeholder:font-medium outline-none';

export const BaseTextField: React.FC<TBaseTextFieldProps> = ({
  icon,
  error,
  fullWidth,
  className,
  ...otherProps
}) => {
  return (
    <div className={cn( className, 'font-inter', fullWidth &&'w-full' )}>
      <div className={cn(
        'relative',
        'after:absolute after:left-0 after:right-0 after:bottom-[1px] after:h-[1px] after:bg-blue after:opacity-50',
        'hover:after:opacity-100 after:duration-200 focus-within:after:opacity-100',
        error && 'after:bg-orange'
      )}
      >
        {
          icon
            ?
            <label>
              <div className="absolute left-[8px] top-[11px]">
                {icon}
              </div>
              <input
                className={cn(
                  inputCls,
                  'py-[12px] pl-[40px] pr-[10px]',
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
        error && <p className="text-[14px] text-orange ml-[4px] mt-[4px]">{error}</p>
      }
    </div>
  );
};