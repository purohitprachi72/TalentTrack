import React from 'react';
import styles from '../MultiStepForm.module.css';

const Education = ({
	education,
	setEducation,
	handleRemoveEntry,
}) => {
	return (
		<div className={styles.education}>
			{education.map((edu, index) => (
				<div key={index} className={styles.educationInputs}>
					<input
						type="text"
						value={edu.institute}
						onChange={(e) =>
							setEducation((prevEducation) =>
								prevEducation.map((item, i) =>
									i === index
										? {
												...item,
												institute: e.target.value,
										  }
										: item
								)
							)
						}
						placeholder="Name of School/College/Institute"
					/>
					<input
						type="text"
						value={edu.pass_out_year}
						onChange={(e) =>
							setEducation((prevEducation) =>
								prevEducation.map((item, i) =>
									i === index
										? {
												...item,
												pass_out_year: e.target.value,
										  }
										: item
								)
							)
						}
						placeholder="Year of Graduation"
					/>
					<input
						type="text"
						value={edu.degree}
						onChange={(e) =>
							setEducation((prevEducation) =>
								prevEducation.map((item, i) =>
									i === index
										? {
												...item,
												degree: e.target.value,
										  }
										: item
								)
							)
						}
						placeholder="Degree"
					/>
					<input
						type="text"
						value={edu.percentage}
						onChange={(e) =>
							setEducation((prevEducation) =>
								prevEducation.map((item, i) =>
									i === index
										? {
												...item,
												percentage: e.target.value,
										  }
										: item
								)
							)
						}
						placeholder="Percentage"
					/>
					<button
						className="btn"
						onClick={() =>
							handleRemoveEntry(index, setEducation)
						}
					>
						Remove
					</button>
				</div>
			))}
			<button
				className="btn"
				onClick={() =>
					setEducation((prevEducation) => [
						...prevEducation,
						{},
					])
				}
			>
				Add Education
			</button>
		</div>
	);
};

export default Education;
