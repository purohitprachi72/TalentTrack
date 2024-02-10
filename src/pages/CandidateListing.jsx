import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CandidateListing = () => {
	const [candidates, setCandidates] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://60d5a2c2943aa60017768b01.mockapi.io/candidate'
				);

				setCandidates(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<button>add new</button>
			<h2>CandidateListing</h2>
			{candidates.map((candidate) => {
				return (
					<>
						<Link
							to={candidate.id}
							state={{ candidateData: candidate }}
						>
							<h2>{candidate.name}</h2>
						</Link>
					</>
				);
			})}
		</>
	);
};

export default CandidateListing;
