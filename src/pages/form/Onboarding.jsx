import React, { useState, Children } from 'react';

const Onboarding = ({ onComplete, children }) => {
	const [currentStep, setCurrentStep] = useState(0);
	const totalSteps = children.length;

	const currentChild =
		Children.toArray(children)[currentStep];

	const onPrevStep = () => {
		if (currentStep > 0) {
			setCurrentStep((prev) => prev - 1);
		}
	};

	const onNextStep = () => {
		// if (currentStep >= totalSteps - 1) {
		// 	onComplete({ a: 1, b: 2, c: 3 });
		// }

		if (currentStep < totalSteps - 1) {
			setCurrentStep((prev) => prev + 1);
		}
	};

	const handleComplete = () => {
		// const keys = Object.keys(localStorage);
		// const onboardingKeys = keys.filter((k) =>
		// 	k.startsWith('onboarding-')
		// );
		// for (let key in onboardingKeys) {
			// data[key] = localStorage.getItem(key);
		// }
		const data = {};
		onComplete(data);
	};

	return (
		<div>
			<h3>
				Step {currentStep + 1} of {totalSteps}
			</h3>
			{currentChild}
			<div>
				<button onClick={onPrevStep}>back</button>
				{currentStep < totalSteps - 1 ? (
					<>
						<button onClick={onNextStep}>next</button>
					</>
				) : (
					<>
						<button onClick={handleComplete}>Submit</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Onboarding;
