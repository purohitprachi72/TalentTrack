import React, { useState } from 'react';
import {
	useLocation,
	useSearchParams,
} from 'react-router-dom';
import MultiStepForm from '../form/MultiStepForm';

const EditCandidate = () => {
	const { state } = useLocation();
	const candidateData = state?.candidateData || {};

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
		id,
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
