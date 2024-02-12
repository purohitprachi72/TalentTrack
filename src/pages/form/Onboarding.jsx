import React, { useState, Children } from 'react';
import styles from './Onboarding.module.css';

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

		console.log(localStorage);

		const data = {};
		onComplete(data);
	};

	return (
		<div className={styles.Onboarding}>
			<div className={styles.heading}>
				<h2>
					Section {currentStep + 1} of {totalSteps}
				</h2>
				<div className={styles.actions}>
					{currentStep > 0 && (
						<button className="btn" onClick={onPrevStep}>
							prev
						</button>
					)}
					{currentStep < totalSteps - 1 ? (
						<button className="btn" onClick={onNextStep}>
							next
						</button>
					) : (
						<button className="btn" onClick={handleComplete}>
							Submit
						</button>
					)}
				</div>
			</div>

			{currentChild}
		</div>
	);
};

export default Onboarding;
