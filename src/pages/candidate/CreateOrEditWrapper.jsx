import React from 'react';
import { useLocation } from 'react-router-dom';
import MultiStepForm from '../form/MultiStepForm';

const CreateOrEditWrapper = () => {
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

	return <MultiStepForm initialData={buildObject} />;
};

export default CreateOrEditWrapper;
