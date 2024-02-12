import axios from 'axios';
import { BASEURL } from './src/constants/constant';

export async function getCandidateData(id) {
	const url = id ? `${BASEURL}/${id}` : BASEURL;

	try {
		const response = await axios.get(url);

		return response.data;
	} catch (error) {
		console.error('Error fetching candidate data:', error);
		return {};
	}
}

export async function deleteCandidate(id) {
	const url = `${BASEURL}/${id}`;

	try {
		const response = await axios.delete(url);

		return response.data;
	} catch (error) {
		console.error('Error deleting candidate:', error);
	}
}

export async function postCandidateData(candidateData) {
	const url = BASEURL;

	try {
		const response = await axios.post(url, candidateData);

		return response.data;
	} catch (error) {
		console.error('Error posting candidate data:', error);
	}
}

export async function putCandidateData(id, updatedData) {
	const url = `${BASEURL}/${id}`;

	try {
		console.log(updatedData);
		const response = await axios.put(url, updatedData);

		return response.data;
	} catch (error) {
		console.error('Error updating candidate data:', error);
	}
}
