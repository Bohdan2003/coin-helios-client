import { Controller, useFormContext } from 'react-hook-form';
import { BaseCheckbox, TBaseCheckboxProps } from '@/ui/fields/BaseCheckbox';

type TFormCheckboxProps = {
  name: string;
} & TBaseCheckboxProps;

export const FormCheckbox: React.FC<TFormCheckboxProps> = ({
  name,
  ...otherProps
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <BaseCheckbox
          {...field}
          {...otherProps}
          error={fieldState.error?.message?.toString()}
        />
      )}
    />
  );
};