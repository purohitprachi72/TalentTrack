import { BASEURL } from './constants/constant';

export async function getCandidateData(id) {
	const url = id ? `${BASEURL}/${id}` : BASEURL;

	const response = await fetch(url);
	if (!response.ok) {
		const error = new Error('Failed to Fetch');
		error.status = response.status;
		error.statusText = response.statusText;
		throw error;
	}
	const parseResponse = await response.json();
	return parseResponse;
}
