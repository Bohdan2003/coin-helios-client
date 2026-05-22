//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import * as yup from 'yup';
import { emailSchema, strWithMinWidthSchema, urlSchema } from '@/shared/model/validationSchemas';

export type TCoinSchema = {
	name: string;
	icon: File | null;
	symbol: string;
	chain: string;
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

export const coinDefaultValues: TCoinSchema = {
	name: '',
	icon: null,
	symbol: '',
	chain: '',
	contracts: [{ address: '', network: '' }],
	otherLinks: [{ link: '' }],
	description: '',
	telegram: '',
	telegramUsername: '',
	reddit: '',
	discord: '',
	twitter: '',
	website: '',
	email: '',
	category: '',
};

export const getCoinSchema = (d: TDictionary['forms']['errors']) => {
	return yup.object().shape({
		name: strWithMinWidthSchema(3, d.stringTooShort).required(d.required),
		icon: yup
			.mixed<File>()
			.nullable()
			.test('fileType', d.fileTypeInvalid, (f) => (f ? f.type.startsWith('image/') : false))
			.test('fileSize', `${d.fileSizeInvalid} 5MB`, (f) => (f ? f.size <= 5 * 1024 * 1024 : false))
			.test('fileDimension', d.fileDimensionInvalid, (f) => {
				if (!f) return false;
				return new Promise((resolve) => {
					const url = URL.createObjectURL(f);
					const img = new Image();

					img.onload = () => {
						URL.revokeObjectURL(url);
						resolve(img.width === 400 && img.height === 400);
					};
					img.onerror = () => {
						URL.revokeObjectURL(url);
						resolve(false);
					};
					img.src = url;
				});
			})
			.required(d.required),
		symbol: strWithMinWidthSchema(3, '').required(d.required),
		chain: yup.string().required(d.required),
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
		telegramUsername: yup.string().test('starts-with-@', d['startsWith@'], (value) => {
			if (!value) return true;
			return value.startsWith('@');
		}),
		reddit: urlSchema(d.urlInvalid),
		discord: urlSchema(d.urlInvalid),
		twitter: urlSchema(d.urlInvalid),
		website: urlSchema(d.urlInvalid).required(d.required),
		email: emailSchema(d.emailInvalid).required(d.required),
		category: yup.string().required(d.required),
	});
};
