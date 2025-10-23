import * as yup from 'yup';

export const strSchemaWithMinWidth = (minWidth: number) => yup
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