'use client';

//hooks
import { useForm } from 'react-hook-form';
//ui
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
import { Button } from '@mui/material';
import {
  FormProvider,
  Resolver
} from 'react-hook-form';
import { FormTextField } from '@/shared/ui/fields/FormTextField';
import { FormTextarea } from '@/shared/ui/fields/FormTextarea';
import { FormCheckbox } from '@/shared/ui/fields/FormCheckbox';
//types
import { TContactSchema } from '@/shared/model/contactFormValidation';
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { yupResolver } from '@hookform/resolvers/yup';
import { getContactSchema } from '@/shared/model/contactFormValidation';
import { cn } from '@/shared/lib/cn';
import { titleCls } from '@/shared/classNames';
import { ROUTES } from '@/shared/routes';

export const PartnerForm: React.FC<{
  dictionary: {
    form: TDictionary['forms']['contact'],
    errors: TDictionary['forms']['errors'];
    button: TDictionary['buttons']['send'],
    link: TDictionary['links']['privacyPolicy'],
  }
}> = ({ dictionary: d }) => {
  const contactSchema = getContactSchema(d.errors);
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(contactSchema) as Resolver<TContactSchema>,
    defaultValues: { name:'', email: '', text:'', terms: true, },
  });

  const onSubmit = (data: TContactSchema) => {
    console.log(data);
  };

  return (
    <div className="lg:max-w-[655px] w-full">
      <p className={cn(titleCls, 'max-w-[540px]')}>
        { d.form.title }
      </p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="mt-[20px] sm:mt-[24px] flex flex-col md:flex-row gap-[24px] md:gap-[16px]">
            <FormTextField
              fullWidth
              name="name"
              placeholder={d.form.fields.name}
            />
            <FormTextField
              fullWidth
              name="email"
              placeholder={d.form.fields.email}
            />
          </div>
          <FormTextarea
            className="mt-[20px] sm:mt-[24px]"
            textareaClassName="h-[120px]"
            fullWidth
            name="text"
            placeholder={d.form.fields.text}
          />
          <FormCheckbox
            className="mt-[20px] sm:mt-[24px]"
            name="terms"
            label={<>
              { d.form.fields.terms }&nbsp;
              <LocalizedLink
                className="text-blue"
                href={ ROUTES.PRIVACY_POLICY }
              >{ d.link }</LocalizedLink>
            </>}
          />
          <div className="mt-[20px] sm:mt-[54px]">
            <Button
              variant="contained"
              type="submit"
            >{ d.button }</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};