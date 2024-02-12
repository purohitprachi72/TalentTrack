import React, { useState } from 'react';
import {
	useLocation,
	useSearchParams,
} from 'react-router-dom';
import MultiStepForm from '../form/MultiStepForm';

const EditCandidate = () => {
	const { state } = useLocation();
	const candidateData = state?.candidateData || {};

	console.log('from edit candidate', candidateData);
	const {
		name,
		address,
		email,
		gender,
		hobbies,
		phone,
		profile_picture,
		experience,
		skills,
		education,
		id,
	} = candidateData;

	const buildObject = {
		personalInfo: {
			name,
			address,
			email,
			gender,
			hobbies,
			phone,
			profile_picture,
		},
		experience,
		skills,
		education,
	};

	return (
		<div>
			<MultiStepForm initialData={buildObject} />
		</div>
	);
};

export default EditCandidate;
