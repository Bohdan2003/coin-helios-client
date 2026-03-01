import * as yup from 'yup';

export const strWithMinWidthSchema = ( minWidth: number, text: string ) => yup
  .string()
  .test(
    'min-if-filled',
    `${minWidth} ${text}`,
    (val) => !val || val.trim().length >= minWidth
  );

export const urlSchema = (text: string) => yup
  .string()
  .url(text);

export const emailSchema = (text: string) => yup
  .string()
  .email(text);

export const termsSchema = (text: string) => yup
  .boolean()
  .oneOf([true], text);