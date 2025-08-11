'use client';
//hooks
import { useForm } from 'react-hook-form';
//ui
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import { FormProvider, Resolver } from 'react-hook-form';
import { FormTextField } from '@/ui/fields/FormTextField';
import { FormTextarea } from '@/ui/fields/FormTextarea';
import { FormCheckbox } from '@/ui/fields/FormCheckbox';
//utils
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
//img
import imgUrl from '@/assets/images/home/partner.jpg';

//TODO: move TYPE to API
type TPartner = {
  name: string;
  email: string;
  text: string;
  terms: boolean;
};

const schema = yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .min(3, '3 characters minimum'),
  email: yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  text: yup.string()
    .required('Text is required')
    .min(30, '30 characters minimum'),
  terms: yup.boolean()
    .oneOf([true], 'You must accept the privacy policy')
    .required(),
});

export const PartnerSection: React.FC = () => {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema) as Resolver<TPartner>,
    defaultValues: { name:'', email: '', text:'', terms: true, },
  });

  const onSubmit = (data: TPartner) => {
    console.log(data);
  };

  return (<section>
    <div className="container grid sm:grid-cols-2 gap-[20px]">
      <div className="grid md:grid-cols-2 gap-x-[20px] gap-y-[20px] md:gap-y-[50px]">
        <div className="relative md:col-span-2">
          <Image
            className="w-full rounded-[32px]"
            src={imgUrl}
            alt="become a partner"
          />
          <h3 className="absolute top-[42px] left-[24px] text-[32px] font-medium leading-[1] text-white">
            Become<br/>
            a partner
          </h3>
        </div>
        <p className="opacity-80 max-w-[275px]">
          List your project on CoinHelios —
          a global platform for investors, traders, and crypto enthusiasts
        </p>
        <p className="opacity-80 max-w-[314px]">
          We’ll help you not only showcase your coin to a wide audience,
          but also promote it with our tools and marketing support
        </p>
      </div>
      <div className="flex justify-end">
        <FormProvider {...methods}>
          <form
            className="max-w-[655px] w-full"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <p className="text-[24px] max-w-[540px]">
              Leave a request, and our manager will contact you shortly to answer all your questions
            </p>
            <div className="mt-[24px] flex gap-[16px]">
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
              className="mt-[24px] h-[120px]"
              fullWidth
              name="text"
              placeholder="Text"
            />
            <FormCheckbox
              className="mt-[24px]"
              name="terms"
              label={<>
                Confirm with&nbsp;
                <Link
                  className="text-blue"
                  href="#"
                >Privacy policy</Link>
              </>}
            />
            <div className="mt-[54px]">
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