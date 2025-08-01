import { Controller, useFormContext } from 'react-hook-form';
import { BaseTextarea } from "@/ui/fields/BaseTextarea";
//types
import type { TBaseTextareaProps} from "@/ui/fields/BaseTextarea";

type TFormTextareaProps = {
  name: string;
} & TBaseTextareaProps;

export const FormTextarea: React.FC<TFormTextareaProps> = ({
  name,
  ...otherProps
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <BaseTextarea
          {...field}
          {...otherProps}
          error={fieldState.error?.message?.toString()}
        />
      )}
    />
  );
};