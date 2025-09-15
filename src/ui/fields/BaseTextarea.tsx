//ui
import { FieldWrapper } from '@/ui/fields/FieldWrapper';
//types
import { TFieldWrapperPropsWithoutChildren } from '@/ui/fields/FieldWrapper';
//utils
import { cn } from '@/utils/cn';
import { fieldCls } from '@/utils/consts/clsVariable';

export type TBaseTextareaProps = {
  textareaClassName?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & TFieldWrapperPropsWithoutChildren;

export const BaseTextarea: React.FC<TBaseTextareaProps> = ({
  label,
  icon,
  error,
  fullWidth,
  required,
  className,
  variant,
  textareaClassName,
  ...otherProps
}) => {
  return (
    <FieldWrapper
      className={className}
      variant={variant}
      error={error}
      fullWidth={fullWidth}
      label={label}
      required={required}
      fieldWrapperClassName="h-auto"
      icon={icon}
    >
      <textarea
        className={cn(
          fieldCls,
          'resize-none',
          textareaClassName,
        )}
        {...otherProps}
      />
    </FieldWrapper>
  );
};