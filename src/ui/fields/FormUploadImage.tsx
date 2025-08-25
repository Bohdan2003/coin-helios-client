'use client';
//hooks
import { useFormContext } from 'react-hook-form';
//ui
import { Controller } from 'react-hook-form';
import { BaseUploadImage } from '@/ui/fields/BaseUploadImage';
//types
import { TBaseUploadImageProps } from '@/ui/fields/BaseUploadImage';

type TFormUploadImageFieldProps = {
  name: string;
} & TBaseUploadImageProps;

export const FormUploadImageField: React.FC<TFormUploadImageFieldProps> = ({
  name,
  ...otherProps
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <BaseUploadImage
          value={field.value}
          onChange={(file) => field.onChange(file)}
          error={fieldState.error?.message?.toString()}
          {...otherProps}
        />
      )}
    />
  );
};
