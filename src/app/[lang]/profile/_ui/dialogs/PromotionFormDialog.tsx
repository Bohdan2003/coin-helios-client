//ui
import {
  Button,
  Dialog,
  IconButton
} from '@mui/material';
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
import {
  FormProvider,
  Resolver,
  useForm
} from 'react-hook-form';
import { FormTextField } from '@/shared/ui/fields/FormTextField';
import { FormTextarea } from '@/shared/ui/fields/FormTextarea';
import { FormCheckbox } from '@/shared/ui/fields/FormCheckbox';
//icons
import CloseIcon from '@mui/icons-material/Close';
//types
import { TContactSchema } from '@/shared/model/contactFormValidation';
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { ROUTES } from '@/shared/routes';
import { getContactSchema } from '@/shared/model/contactFormValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { titleCls } from '@/shared/classNames';
import { cn } from '@/shared/lib/cn';

export const PromotionFormDialog: React.FC<{
  id: string;
  isOpen: boolean;
  onClose: () => void;
  dictionary: {
    form: TDictionary['forms']['contact'];
    link: TDictionary['links']['privacyPolicy'];
    buttons: TDictionary['buttons'];
    errors: TDictionary['forms']['errors'];
  };
}> = ({
  isOpen,
  onClose,
  dictionary: d
}) => {
  const contactSchema = getContactSchema(d.errors);
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(contactSchema) as Resolver<TContactSchema>,
    defaultValues: { name:'', email: '', text: '', terms: true, },
  });

  const onSubmit = (data: TContactSchema) => {
    console.log(data);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDialog-paper': {
          m: '10px',
          width: '100%',
        }
      }}
    >
      <FormProvider {...methods}>
        <form
          className="p-[18px] sm:py-[24px] sm:px-[32px]"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex justify-between items-start">
            <p className={cn(titleCls, 'max-w-[600px]')}>
              { d.form.title }
            </p>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="mt-[20px] sm:mt-[24px] flex flex-col md:flex-row gap-[24px] md:gap-[16px]">
            <FormTextField
              fullWidth
              name="name"
              placeholder={ d.form.fields.name }
            />
            <FormTextField
              fullWidth
              name="email"
              placeholder={ d.form.fields.email }
            />
          </div>
          <FormTextarea
            className="mt-[20px] sm:mt-[24px]"
            textareaClassName="h-[120px]"
            name="text"
            placeholder={ d.form.fields.text }
            fullWidth
          />
          <div className="mt-[20px] sm:mt-[54px] sm:flex justify-between items-center gap-[20px]">
            <FormCheckbox
              name="terms"
              label={<>
                { d.form.fields.terms }&nbsp;
                <LocalizedLink
                  className="text-blue"
                  href={ ROUTES.PRIVACY_POLICY }
                >{ d.link }</LocalizedLink>
              </>}
            />
            <div className="mt-[54px] sm:mt-0 flex gap-[20px]">
              <Button
                className="w-full sm:w-auto"
                onClick={onClose}
              >
                { d.buttons.cancel }
              </Button>
              <Button
                className="w-full sm:w-auto"
                variant="contained"
                type="submit"
              >{ d.buttons.send }</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </Dialog>
  );
};