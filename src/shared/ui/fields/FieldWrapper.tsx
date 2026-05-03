//utils
import { cn } from '@/shared/lib/cn';
import {
  fieldBottomBorderCls,
  fieldErrorCls,
  fieldLabelCls,
} from '@/shared/classNames';
import {Skeleton} from "@mui/material";

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
  isLoading?: boolean;
  isError?: boolean;
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
  isLoading,
  isError,
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
        {
          isLoading
            ? <Skeleton className="mt-[6px]" variant="rectangular" height={40} />
            :
            <div className={cn(
              isError && 'opacity-50 pointer-events-none',
              'mt-[6px] relative h-[40px] px-[12px] py-[10px]',
              variant === 'standard' && !isError && fieldBottomBorderCls,
              fullWidth ? 'flex' : 'inline-flex',
              'items-center gap-[6px]',
              error && 'after:bg-orange',
              fieldWrapperClassName
            )}
            >
              { icon }
              { children }
            </div>
        }
      </label>
      {
        error && <p className={fieldErrorCls}>{error}</p>
      }
    </div>
  );
};