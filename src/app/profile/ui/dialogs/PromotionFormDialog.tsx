//ui
import {
  Button,
  Dialog,
  IconButton
} from '@mui/material';
import Link from 'next/link';
import {
  FormProvider,
  Resolver,
  useForm
} from 'react-hook-form';
import { FormTextField } from '@/ui/fields/FormTextField';
import { FormTextarea } from '@/ui/fields/FormTextarea';
import { FormCheckbox } from '@/ui/fields/FormCheckbox';
//icons
import CloseIcon from '@mui/icons-material/Close';
//utils
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { smallTitleCls } from '@/utils/consts/clsVariable';
import { cn } from '@/utils/cn';
import {
  getStrSchemaWithMinWidth,
  emailSchema,
  termsSchema
} from '@/utils/validationSchemas';

type TPromotionFormDialogProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

type TPromotion = {
  name: string;
  email: string;
  description: string;
  terms: boolean;
};

const schema = yup.object().shape({
  name: getStrSchemaWithMinWidth(3).required('Required'),
  email: emailSchema.required('Required'),
  description: getStrSchemaWithMinWidth(30).required('Required'),
  terms: termsSchema,
});

export const PromotionFormDialog: React.FC<TPromotionFormDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema) as Resolver<TPromotion>,
    defaultValues: { name:'', email: '', description:'', terms: true, },
  });

  const onSubmit = (data: TPromotion) => {
    console.log(data);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <FormProvider {...methods}>
        <form
          className="py-[24px] px-[32px] w-[650px]"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex justify-between items-start">
            <p className={cn(smallTitleCls, 'max-w-[366px]')}>
              Leave a request, and our manager will contact you shortly
            </p>
            <IconButton
              aria-label="close"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="mt-[20px] sm:mt-[24px] flex flex-col md:flex-row gap-[24px] md:gap-[16px]">
            <FormTextField
              fullWidth
              name="name"
              placeholder="Name"
            />
            <FormTextField
              fullWidth
              name="email"
              placeholder="Email"
            />
          </div>
          <FormTextarea
            className="mt-[20px] sm:mt-[24px]"
            textareaClassName="h-[120px]"
            name="description"
            placeholder="Text"
            fullWidth
          />
          <div className="sm:mt-[54px] flex justify-between items-center gap-[20px]">
            <FormCheckbox
              name="terms"
              label={<>
                Confirm with&nbsp;
                <Link
                  className="text-blue"
                  href="#"
                >Privacy policy</Link>
              </>}
            />
            <div className="flex gap-[20px]">
              <Button onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
              >Send</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </Dialog>
  );
};