import React from 'react';
import Onboarding from './Onboarding';
import usePersistentState from '../../hooks/usePersistentState';
import styles from './MultiStepForm.module.css';
import PersonalInfo from './steps/PersonalInfo';
import Education from './steps/Education';
import Skills from './steps/Skills';
import Experience from './steps/Experience';
import {
	postCandidateData,
	putCandidateData,
} from '../../../api';

const MultiStepForm = ({ initialData }) => {
	const [personalInfo, setPersonalInfo, clearPersonalInfo] =
		usePersistentState(
			'personalInfo',
			initialData?.personalInfo || {}
		);
	const [education, setEducation, clearEducation] =
		usePersistentState(
			'education',
			initialData?.education || []
		);
	const [skills, setSkills, clearSkills] =
		usePersistentState('skills', initialData?.skills || []);
	const [experience, setExperience, clearExperience] =
		usePersistentState(
			'experience',
			initialData?.experience || []
		);

	const handleComplete = async () => {
		const formData = {
			profile_picture:
				'https://picsum.photos/300/200?random=1',
			...personalInfo,
			education,
			skills,
			experience,
		};

		try {
			if (initialData) {
				// If initialData exists, it means we are editing an existing candidate
				await putCandidateData(initialData.id, formData);
				console.log('updated form data');
			} else {
				// Otherwise, it's a new candidate, so we use the postCandidateData function
				await postCandidateData(formData);
				console.log('posted form data');
			}
			console.log('Form Data:', formData);
		} catch (error) {
			console.error(error);
		} finally {
			clearPersonalInfo({});
			clearExperience([]);
			clearEducation([]);
			clearSkills([]);
		}
	};

	const handlePersonalInfo = (e) => {
		const { name, value, type } = e.target;

		setPersonalInfo((prevInfo) => {
			if (type === 'checkbox') {
				// Handle multi-select (checkboxes)
				const selectedOptions = prevInfo[name] || [];

				if (e.target.checked) {
					// Add the selected option if checked
					return {
						...prevInfo,
						[name]: [...selectedOptions, value],
					};
				} else {
					// Remove the unselected option if unchecked
					return {
						...prevInfo,
						[name]: selectedOptions.filter(
							(option) => option !== value
						),
					};
				}
			} else {
				// Handle other input types
				return { ...prevInfo, [name]: value };
			}
		});
	};

	const handleRemoveEntry = (index, setFunction) => {
		setFunction((prevEntries) =>
			prevEntries.filter((entry, i) => i !== index)
		);
	};

	return (
		<Onboarding onComplete={handleComplete}>
			<div className={styles.PersonalInfo}>
				<div className={styles.cardTitle}>
					<h3>Personal Details</h3>
				</div>
				<PersonalInfo
					handlePersonalInfo={handlePersonalInfo}
					personalInfo={personalInfo}
				/>
			</div>

			<div className={styles.Education}>
				<div className={styles.cardTitle}>
					<h3>Education</h3>
				</div>
				<Education
					education={education}
					setEducation={setEducation}
					handleRemoveEntry={handleRemoveEntry}
				/>
			</div>

			<div className={styles.Skills}>
				<div className={styles.cardTitle}>
					<h3>Skills</h3>
				</div>

				<Skills
					skills={skills}
					setSkills={setSkills}
					handleRemoveEntry={handleRemoveEntry}
				/>
			</div>

			<div className={styles.Experience}>
				<div className={styles.cardTitle}>
					<h3>Experience</h3>
				</div>
				<Experience
					experience={experience}
					setExperience={setExperience}
					handleRemoveEntry={handleRemoveEntry}
				/>
			</div>
		</Onboarding>
	);
};

export default MultiStepForm;
