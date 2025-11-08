'use client';
//hooks
import {
  useFormContext,
  useFieldArray,
} from 'react-hook-form';
//ui
import {
  Button,
  IconButton
} from '@mui/material';
//icons
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
//utils
import { cn } from '@/shared/lib/cn';
import { fieldLabelCls } from '@/shared/classNames/classNames';

type ArrayItemType<T> = T extends readonly (infer U)[] ? U : never;

type TFieldArraySectionProps<TFormValues> = {
  name: keyof TFormValues & string;
  createDefault: () => ArrayItemType<TFormValues[keyof TFormValues & string]>;
  renderRow: (getFieldName: (subName: string) => string) => React.ReactNode;
  label?: string;
  required?: boolean;
  addText?: string;
  min?: number;
  max?: number;
  className?: string;
  rowClassName?: string;
};

export function FormFieldArraySection<TFormValues>({
  name,
  createDefault,
  renderRow,
  label,
  required,
  min = 1,
  max,
  className,
  rowClassName,
}: TFieldArraySectionProps<TFormValues>) {
  const { control } = useFormContext();
  const {
    fields,
    append,
    remove
  } = useFieldArray({ control, name });

  return (
    <div className={cn(className)}>
      {
        label &&
        <p className={fieldLabelCls}>
          {label}{required && <span className="text-orange">*</span>}
        </p>
      }

      <div className="grid gap-[20px]">
        {
          fields.map((field, index) => {
            const getFieldName = (subName?: string) =>
              `${name}.${index}.${subName}`;

            const canRemove = fields.length > (min ?? 0);

            return (
              <div key={field.id} className={cn('relative', rowClassName)}>
                {renderRow(getFieldName)}
                {canRemove && (
                  <IconButton
                    size="small"
                    onClick={() => remove(index)}
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: -38,
                      opacity: 0.5,
                    }}
                  >
                    <CloseIcon fontSize="small"/>
                  </IconButton>
                )}
              </div>
            );
          })
        }
      </div>

      <Button
        variant="text"
        size="small"
        endIcon={<AddIcon color="primary"/>}
        onClick={() => {
          if(!(max && fields.length >= max))
            append(createDefault() as any, { shouldFocus: false });
        }}
        disabled={!!max && fields.length >= max}
        sx={{
          p: '4px',
          mt: '12px',
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'none'
        }}
      >
        <span className="text-blue">add more</span>
      </Button>
    </div>
  );
}
