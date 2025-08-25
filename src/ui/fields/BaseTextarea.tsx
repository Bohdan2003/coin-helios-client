//utils
import { cn } from '@/utils/cn';
import {
  fieldLabelCls,
  fieldBottomBorderCls,
  fieldErrorCls,
} from '@/utils/consts/clsVariable';

export type TBaseTextareaProps = {
  className?: string;
  textareaClassName?: string;
  label?: string;
  error?: string | null;
  value?: string;
  placeholder?: string;
  fullWidth?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const textareaCls = 'w-full placeholder:[color:inherit] placeholder:opacity-[0.5] placeholder:font-medium outline-none';

export const BaseTextarea: React.FC<TBaseTextareaProps> = ({
  label,
  error,
  fullWidth,
  required,
  className,
  textareaClassName,
  ...otherProps
}) => {
  return (
    <div className={cn( className, 'font-inter', fullWidth && 'w-full' )}>
      <div className={cn(
        'relative h-full',
        fieldBottomBorderCls,
        error && 'after:bg-orange'
      )}>
        {
          label
            ?
            <label>
              <p className={fieldLabelCls}>
                {label}{required && <span className="text-orange">*</span>}
              </p>
              <textarea
                className={cn(
                  textareaClassName,
                  textareaCls,
                  'resize-none py-[12px] px-[10px]',
                )}
                {...otherProps}
              />
            </label>
            :
            <textarea
              className={cn(
                textareaCls,
                textareaClassName,
                'resize-none py-[12px] px-[10px]',
              )}
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