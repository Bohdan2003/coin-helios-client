'use client';
//hooks
import { useForm } from 'react-hook-form';
//ui
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import {
  FormProvider,
  Resolver
} from 'react-hook-form';
import { FormTextField } from '@/shared/ui/fields/FormTextField';
import { FormTextarea } from '@/shared/ui/fields/FormTextarea';
import { FormCheckbox } from '@/shared/ui/fields/FormCheckbox';
//utils
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  titleCls,
  bigTitleCls
} from '@/shared/lib/classNames';
import { cn } from '@/shared/lib/cn';
import {
  strSchemaWithMinWidth,
  emailSchema,
  termsSchema
} from '@/shared/lib/validationSchemas';
//img
import imgUrl from '@/shared/assets/images/partner.jpg';

//TODO: move TYPE to API
type TPartner = {
  name: string;
  email: string;
  description: string;
  terms: boolean;
};

const schema = yup.object().shape({
  name: strSchemaWithMinWidth(3).required('Required'),
  email: emailSchema.required('Required'),
  description: strSchemaWithMinWidth(30).required('Required'),
  terms: termsSchema,
});

export const PartnerSection: React.FC = () => {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema) as Resolver<TPartner>,
    defaultValues: { name:'', email: '', description:'', terms: true, },
  });

  const onSubmit = (data: TPartner) => {
    console.log(data);
  };

  return (<section>
    <div className="container grid sm:grid-cols-2 gap-[60px] sm:gap-[20px]">
      <div className="grid md:grid-cols-2 gap-x-[20px] gap-y-[20px] md:gap-y-[50px]">
        <div className="relative md:col-span-2">
          <Image
            className="w-full h-[320px] object-cover rounded-[32px]"
            src={imgUrl}
            alt="become a partner"
          />
          <h3
            className={cn(
              bigTitleCls,
              'absolute top-[60px] lg:top-[42px] left-[24px] text-white'
            )}
          >
            Become<br/>
            a partner
          </h3>
        </div>
        <p className="opacity-80 md:max-w-[275px]">
          List your project on CoinHelios —
          a global platform for investors, traders, and crypto enthusiasts
        </p>
        <p className="opacity-80 md:max-w-[314px]">
          We’ll help you not only showcase your coin to a wide audience,
          but also promote it with our tools and marketing support
        </p>
      </div>
      <div className="flex justify-end">
        <FormProvider {...methods}>
          <form
            className="lg:max-w-[655px] w-full"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <p className={cn(titleCls, 'max-w-[540px]')}>
              Leave a request, and our manager will contact you shortly to answer all your questions
            </p>
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
              fullWidth
              name="description"
              placeholder="Text"
            />
            <FormCheckbox
              className="mt-[20px] sm:mt-[24px]"
              name="terms"
              label={<>
                Confirm with&nbsp;
                <Link
                  className="text-blue"
                  href="#"
                >Privacy policy</Link>
              </>}
            />
            <div className="mt-[20px] sm:mt-[54px]">
              <Button
                variant="contained"
                type="submit"
              >Send</Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  </section>);
};