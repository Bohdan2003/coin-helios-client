import * as yup from 'yup';
import {
  emailSchema,
  imageFileSchema,
  strSchemaWithMinWidth,
  urlSchema
} from '@/shared/model/validationSchemas';

export type TCoinSchema = {
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
  name: strSchemaWithMinWidth(3).required('Required'),
  icon: imageFileSchema.required('Required'),
  symbol: strSchemaWithMinWidth(3).required('Required'),
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

  description: strSchemaWithMinWidth(30),
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

