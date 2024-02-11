import React from 'react';
import Onboarding from './Onboarding';

const MultiStepForm = () => {
	const handleComplete = () => {
		console.log('clicked');
	};

	return (
		<Onboarding onComplete={handleComplete}>
			<div>
				<input placeholder="Name"></input>
				<input placeholder="Email"></input>
			</div>
			<div>
				<input placeholder="Favorite Food"></input>
				<input placeholder="Favorite Place"></input>
			</div>
			<div>
				<input placeholder="Do you have any pets?"></input>
				<input placeholder="What do you do for work?"></input>
			</div>
		</Onboarding>
	);
};

export default MultiStepForm;
