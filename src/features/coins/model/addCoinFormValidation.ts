//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import * as yup from 'yup';
import {
  emailSchema,
  strWithMinWidthSchema,
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

export const getCoinSchema = (d: TDictionary['forms']['errors']) => {
  return yup.object().shape({
    name: strWithMinWidthSchema(3, d.stringTooShort).required(d.required),
    icon: yup
      .mixed<File>()
      .nullable()
      .test('fileType', d.fileTypeInvalid, (f) =>
        f ? f.type.startsWith('image/') : false
      )
      .test('fileSize', `${d.fileSizeInvalid} 5MB`, (f) =>
        f ? f.size <= 5 * 1024 * 1024 : false
      )
      .required(d.required),
    symbol: strWithMinWidthSchema(3, '').required(d.required),
    chain: yup.string().required(d.required),
    // listings: yup.array().of(
    //   yup.object({
    //     platform: yup.string(),
    //     link: urlSchema,
    //   })
    // ),
    contracts: yup.array().of(
      yup.object({
        address: yup.string().required(d.required),
        network: yup.string().required(d.required),
      })
    ),
    otherLinks: yup.array().of(
      yup.object({
        link: urlSchema(d.urlInvalid),
      })
    ),

    description: strWithMinWidthSchema(30, d.stringTooShort),
    telegram: urlSchema(d.urlInvalid),
    telegramUsername: yup
      .string()
      .test(
        'starts-with-@',
        d['startsWith@'],
        (value) => {
          if (!value) return true;
          return value.startsWith('@');
        }
      ),
    reddit: urlSchema(d.urlInvalid),
    discord: urlSchema(d.urlInvalid),
    twitter: urlSchema(d.urlInvalid),
    website: urlSchema(d.urlInvalid).required(d.required),
    email: emailSchema(d.emailInvalid).required(d.required),
    category: yup.string().required(d.required),
  });
};

