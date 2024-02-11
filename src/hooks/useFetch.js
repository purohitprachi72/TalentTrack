import { useEffect, useState } from 'react';
import { getCandidateData } from '../api';

export const useFetch = (id) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = id
					? await getCandidateData(id)
					: await getCandidateData();
				setData(response);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [id]);

	return { data, loading };
};
