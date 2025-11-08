//ui
import { FieldWrapper } from '@/shared/ui/fields/FieldWrapper';
//types
import { TFieldWrapperPropsWithoutChildren } from '@/shared/ui/fields/FieldWrapper';
//utils
import { fieldCls } from '@/shared/classNames/classNames';

export type TBaseTextFieldProps = {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & TFieldWrapperPropsWithoutChildren;

export const BaseTextField: React.FC<TBaseTextFieldProps> = ({
  label,
  icon,
  required,
  className,
  variant,
  error,
  fullWidth,
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
      icon={icon}
    >
      <input
        className={fieldCls}
        type="text"
        {...otherProps}
      />
    </FieldWrapper>
  );
};