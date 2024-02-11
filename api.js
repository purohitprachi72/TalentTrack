import axios from 'axios';
import { BASEURL } from './src/constants/constant';

export async function getCandidateData(id) {
	const url = id ? `${BASEURL}/${id}` : BASEURL;

	try {
		const response = await axios.get(url);

		console.log(response.data);

		return response.data;
	} catch (error) {
		console.error('Error fetching candidate data:', error);

		// Handle the error gracefully by providing a default or fallback data
		return getDefaultCandidateData();
	}
}

export async function deleteCandidate(id) {
	const url = `${BASEURL}/${id}`;

	try {
		const response = await axios.delete(url);

		return response.data;
	} catch (error) {
		console.error('Error deleting candidate:', error);

		// Handle the error gracefully by providing a default or fallback response
		return getDefaultDeleteResponse();
	}
}

function getDefaultCandidateData() {
	return {
		id: 0,
		name: 'Default Candidate' /* other properties */,
	};
}
