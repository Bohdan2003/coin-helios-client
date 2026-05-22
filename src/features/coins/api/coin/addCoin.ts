import { TCoinSchema } from '@/features/coins/model/addCoinFormValidation';
import { apiPostRequest } from '@/shared/api/apiClientPost';

export type TCreateCoinRequestResponse = {
	success: boolean;
	application_id: number;
};

const toFormData = (data: TCoinSchema): FormData => {
	const fd = new FormData();

	fd.append('name', data.name);
	fd.append('symbol', data.symbol);
	fd.append('email', data.email || '');
	fd.append('email_for_communication', data.email || '');
	fd.append('coin_description', data.description || '');
	fd.append('website', data.website || '');
	fd.append('reddit', data.reddit || '');
	fd.append('discord', data.discord || '');
	fd.append('telegram', data.telegram || '');
	fd.append('telegram_contact', data.telegramUsername || '');
	fd.append('twitter', data.twitter || '');

	const otherLinks = data.otherLinks
		.map(({ link }) => link)
		.filter(Boolean)
		.join('\n');
	fd.append('other_links', otherLinks || '');

	fd.append('categories', JSON.stringify(data.category ? [data.category] : []));

	fd.append(
		'contract_addresses',
		JSON.stringify(
			data.contracts
				.filter(({ address, network }) => address && network)
				.map(({ address, network }) => ({
					contract_address: address,
					network_name: network,
				}))
		)
	);

	if (data.icon) fd.append('image', data.icon);

	return fd;
};

export const addCoin = (data: TCoinSchema) => apiPostRequest<TCreateCoinRequestResponse>('coin_api/auth/coin-request', toFormData(data));
