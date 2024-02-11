import React, { Children, useState } from 'react';
import styles from './MultiStep.module.css';
import { GrFormNextLink } from 'react-icons/gr';
import { IoArrowBack } from 'react-icons/io5';

const MultiStepView = ({ children }) => {
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
		if (currentStep < totalSteps - 1) {
			setCurrentStep((prev) => prev + 1);
		}
	};

	return (
		<div className={styles.multiStepView}>
			<div className={styles.heading}>
				<h3>
					Section {currentStep + 1} of {totalSteps}
				</h3>
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
						<button className="btn" onClick={onNextStep}>
							Shortlist
						</button>
					)}
				</div>
			</div>

			{currentChild}
		</div>
	);
};

export default MultiStepView;
