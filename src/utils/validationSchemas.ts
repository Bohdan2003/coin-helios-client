import * as yup from 'yup';

export const getStrSchemaWithMinWidth = (minWidth: number) => yup
  .string()
  .test(
    'min-if-filled',
    `${minWidth} characters minimum`,
    (val) => !val || val.trim().length >= minWidth
  );

export const urlSchema = yup
  .string()
  .url('Invalid URL');

export const emailSchema = yup
  .string()
  .email('Invalid email address');

export const termsSchema = yup
  .boolean()
  .oneOf([true], 'You must accept the privacy policy');

export const imageFileSchema = yup
  .mixed<File>()
  .nullable()
  .test('fileType', 'Only image files are allowed', (f) =>
    f ? f.type.startsWith('image/') : false
  )
  .test('fileSize', 'Max file size is 5MB', (f) =>
    f ? f.size <= 5 * 1024 * 1024 : false
  );

export type TCoin = {
  name: string;
  icon: File | null;
  symbol: string;
  chain: string;
  // listings?: Array<{
  //   platform: string;
  //   link: string;
  // }>;
  contracts: Array<{
    address: string;
    network: string;
  }>;
  otherLinks: Array<{ link: string }>;

  description: string;
  telegram?: string;
  telegramUsername?: string;
  reddit?: string;
  discord?: string;
  twitter?: string;
  website: string;
  email: string;
  category: string;
};

export const coinSchema = yup.object().shape({
  name: getStrSchemaWithMinWidth(3).required('Required'),
  icon: imageFileSchema.required('Required'),
  symbol: getStrSchemaWithMinWidth(3).required('Required'),
  chain: yup.string().required('Required'),
  // listings: yup.array().of(
  //   yup.object({
  //     platform: yup.string(),
  //     link: urlSchema,
  //   })
  // ),
  contracts: yup.array().of(
    yup.object({
      address: yup.string().required('Required'),
      network: yup.string().required('Required'),
    })
  ),
  otherLinks: yup.array().of(
    yup.object({
      link: urlSchema,
    })
  ),

  description: getStrSchemaWithMinWidth(30),
  telegram: urlSchema,
  telegramUsername: yup
    .string()
    .test(
      'starts-with-@',
      'Telegram username must start with "@"',
      (value) => {
        if (!value) return true;
        return value.startsWith('@');
      }
    ),
  reddit: urlSchema,
  discord: urlSchema,
  twitter: urlSchema,
  website: urlSchema.required('Required'),
  email: emailSchema.required('Required'),
  category: yup.string().required('Required'),
});

