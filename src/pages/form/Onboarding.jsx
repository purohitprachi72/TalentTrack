import React, { useState, Children } from 'react';
import styles from './Onboarding.module.css';
import { useData } from '../../context/DataContext';

const Onboarding = ({ onComplete, children, onEdit }) => {
	const [currentStep, setCurrentStep] = useState(0);
	const totalSteps = children.length;

	const { isEditing, setIsEditing } = useData();

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

	const handleComplete = () => {
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
					) : isEditing ? (
						<button className="btn" onClick={onEdit}>
							Edit
						</button>
					) : (
						<button
							className="btn"
							onClick={handleComplete}
						>
							Submit
						</button>
					)}
				</div>
			</div>

			<div className={styles.children}>{currentChild}</div>
		</div>
	);
};

export default Onboarding;
