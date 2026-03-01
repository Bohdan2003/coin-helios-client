//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import * as yup from 'yup';
import {
  emailSchema,
  strWithMinWidthSchema,
  termsSchema
} from '@/shared/model/validationSchemas';

export type TContactSchema = {
  name: string;
  email: string;
  text: string;
  terms: boolean;
};

export const getContactSchema = (d: TDictionary['forms']['errors']) => yup.object().shape({
  name: strWithMinWidthSchema(3, d.stringTooShort).required(d.required),
  email: emailSchema(d.emailInvalid).required(d.required),
  text: strWithMinWidthSchema(30, d.stringTooShort).required(d.required),
  terms: termsSchema(d.privacyPolicy),
});