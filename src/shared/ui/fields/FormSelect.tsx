import { Controller, useFormContext } from 'react-hook-form';
import { BaseSelect } from '@/shared/ui/fields/BaseSelect';
//types
import { TBaseSelectProps } from '@/shared/ui/fields/BaseSelect';

type TFormSelectProps = {
  name: string;
} & Omit<TBaseSelectProps, 'onChange'>;

export const FormSelect: React.FC<TFormSelectProps> = ({
  name,
  ...otherProps
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <BaseSelect
          {...field}
          {...otherProps}
          error={fieldState.error?.message?.toString()}
        />
      )}
    />
  );
};