import { Controller, useFormContext } from 'react-hook-form';
import { BaseSelect } from '@/ui/fields/BaseSelect';
//types
import { TBaseTextFieldProps } from '@/ui/fields/BaseTextField';

type TFormSelectProps = {
  name: string;
} & TBaseTextFieldProps;

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
        //@ts-ignore
        <BaseSelect
          {...field}
          {...otherProps}
          error={fieldState.error?.message?.toString()}
        />
      )}
    />
  );
};