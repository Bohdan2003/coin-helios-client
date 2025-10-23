//utils
import { cn } from '@/shared/lib/cn';
import {
  fieldBottomBorderCls,
  fieldErrorCls,
  fieldLabelCls,
} from '@/shared/lib/classNames';

type TFieldWrapperProps = {
  children: React.ReactNode;
  label?: string;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
  fieldWrapperClassName?: string;
  fullWidth?: boolean;
  variant?: 'standard' | 'text';
  error?: string | null;
}

export type TFieldWrapperPropsWithoutChildren = Omit<TFieldWrapperProps, 'children'>

export const FieldWrapper: React.FC<TFieldWrapperProps> = ({
  children,
  label,
  required,
  icon,
  className,
  fieldWrapperClassName,
  fullWidth,
  variant = 'standard',
  error,
}) => {
  return (
    <div className={cn(
      'font-inter',
      fullWidth ? 'w-full' : 'inline-block',
      className
    )}>
      <label>
        {
          label &&
          <span className={fieldLabelCls}>
            {label}{required && <span className="text-orange">*</span>}
          </span>
        }
        <div className={cn(
          'mt-[6px] relative h-[40px] px-[12px] py-[10px]',
          variant === 'standard' && fieldBottomBorderCls,
          fullWidth ? 'flex' : 'inline-flex',
          'items-center gap-[6px]',
          error && 'after:bg-orange',
          fieldWrapperClassName
        )}
        >
          { icon }
          { children }
        </div>
      </label>
      {
        error && <p className={fieldErrorCls}>{error}</p>
      }
    </div>
  );
};