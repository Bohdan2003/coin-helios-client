import { Controller, useFormContext } from 'react-hook-form';
import { BaseTextField } from "@/ui/fields/BaseTextField";
//types
import { TBaseTextFieldProps } from "@/ui/fields/BaseTextField";

type TFormTextFieldProps = {
  name: string;
} & TBaseTextFieldProps;

export const FormTextField: React.FC<TFormTextFieldProps> = ({
  name,
  ...otherProps
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <BaseTextField
          {...field}
          {...otherProps}
          error={fieldState.error?.message?.toString()}
        />
      )}
    />
  );
};