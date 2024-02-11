import axios from 'axios';
import { BASEURL } from './constants/constant';

export async function getCandidateData(id) {
	const url = id ? `${BASEURL}/${id}` : BASEURL;

	try {
		const response = await axios.get(url, {
			responseType: 'json',
		});

		return response.data;
	} catch (error) {
		console.error('Error fetching candidate data:', error);
		throw error;
	}
}

export async function deleteCandidate(id) {
	const url = `${BASEURL}/${id}`;

	try {
		const response = await axios.delete(url);

		return response.data;
	} catch (error) {
		console.error('Error deleting candidate:', error);
		throw error;
	}
}
