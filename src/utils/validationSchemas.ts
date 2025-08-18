import * as yup from 'yup';

export const nameSchema = yup.string()
  .required('Name is required')
  .min(3, '3 characters minimum');

export const emailSchema = yup.string()
  .required('Email is required')
  .email('Invalid email address');

export const textSchema = yup.string()
  .required('Text is required')
  .min(30, '30 characters minimum');

export const termsSchema = yup.boolean()
  .oneOf([true], 'You must accept the privacy policy')
  .required();
