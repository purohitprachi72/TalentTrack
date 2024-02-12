import { useEffect, useState } from 'react';
import { getCandidateData } from '../../api/api';
import { useData } from '../context/DataContext';

export const useFetch = (id) => {
	const { candidatesData, setCandidatesData } = useData();
	const { candidateData, setCandidateData } = useData();
	// const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);

				if (id) {
					const response = await getCandidateData(id);
					setCandidateData(response);
				} else {
					const response = await getCandidateData();
					setCandidatesData(response);
					// setData(response);
				}
			} catch (error) {
				console.error('Error in useFetch:', error);

				// Handle the error gracefully, and set an error state
				setError(error);

				// Provide default or fallback data
				// setData(getDefaultData());
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	return {
		loading,
		error,
		candidatesData,
		candidateData,
	};
};
