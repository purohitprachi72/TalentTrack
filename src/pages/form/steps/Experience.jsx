import React from 'react';
import styles from '../MultiStepForm.module.css';

const Experience = ({
	experience,
	setExperience,
	handleRemoveEntry,
}) => {
	return (
		<div className={styles.experience}>
			{experience.map((exp, index) => (
				<div
					key={index}
					className={styles.experienceInputs}
				>
					<input
						type="text"
						value={exp.company}
						onChange={(e) =>
							setExperience((prevExperience) =>
								prevExperience.map((item, i) =>
									i === index
										? {
												...item,
												company: e.target.value,
										  }
										: item
								)
							)
						}
						placeholder="Name of the company"
					/>
					<input
						type="text"
						value={exp.project}
						onChange={(e) =>
							setExperience((prevExperience) =>
								prevExperience.map((item, i) =>
									i === index
										? {
												...item,
												project: e.target.value,
										  }
										: item
								)
							)
						}
						placeholder="Name of the project"
					/>
					<input
						type="text"
						value={exp.role}
						onChange={(e) =>
							setExperience((prevExperience) =>
								prevExperience.map((item, i) =>
									i === index
										? { ...item, role: e.target.value }
										: item
								)
							)
						}
						placeholder="Role"
					/>
					<div className={styles.duration}>
						<input
							type="text"
							value={exp.duration_from}
							onChange={(e) =>
								setExperience((prevExperience) =>
									prevExperience.map((item, i) =>
										i === index
											? {
													...item,
													duration_from: e.target.value,
											  }
											: item
									)
								)
							}
							placeholder="Duration From"
						/>
						<input
							type="text"
							value={exp.duration_to}
							onChange={(e) =>
								setExperience((prevExperience) =>
									prevExperience.map((item, i) =>
										i === index
											? {
													...item,
													duration_to: e.target.value,
											  }
											: item
									)
								)
							}
							placeholder="Duration To"
						/>
					</div>
					<button
						className="btn"
						onClick={() =>
							handleRemoveEntry(index, setExperience)
						}
					>
						Remove
					</button>
					{/* Add more experience fields if needed */}
				</div>
			))}
			<button
				className="btn"
				onClick={() =>
					setExperience((prevExperience) => [
						...prevExperience,
						{},
					])
				}
			>
				Add Experience
			</button>
		</div>
	);
};

export default Experience;
