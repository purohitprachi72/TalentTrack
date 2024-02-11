import { useEffect, useState } from 'react';
import { getCandidateData } from '../../api';

export const useFetch = (id) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = id
					? await getCandidateData(id)
					: await getCandidateData();
				setData(response);
			} catch (error) {
				console.error('Error in useFetch:', error);

				// Handle the error gracefully, and set an error state
				setError(error);

				// Provide default or fallback data
				setData(getDefaultData());
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	return { data, loading, error, setData };
};

// Placeholder function to provide default or fallback data
function getDefaultData() {
	// Modify this function to return default or fallback data as needed
	return {
		id: 0,
		name: 'Default Candidate' /* other properties */,
	};
}
