import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Candidate = () => {
	const { id } = useParams();
	const { state } = useLocation();
	const { candidateData } = state;

	console.log(state);

	return (
		<div>
			Candidate
			<p>{candidateData.name}</p>
		</div>
	);
};

export default Candidate;
