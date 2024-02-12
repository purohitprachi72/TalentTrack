import React from 'react';
import styles from '../MultiStepForm.module.css';

const Skills = ({
	skills,
	setSkills,
	handleRemoveEntry,
}) => {
	return (
		<div className={styles.skills}>
			{skills.map((skill, index) => (
				<div key={index} className={styles.skillsInputs}>
					<input
						type="text"
						value={skill.name}
						onChange={(e) =>
							setSkills((prevSkills) =>
								prevSkills.map((item, i) =>
									i === index
										? { ...item, name: e.target.value }
										: item
								)
							)
						}
						placeholder="Name of Skill"
					/>
					<input
						type="number"
						value={skill.experience}
						onChange={(e) =>
							setSkills((prevSkills) =>
								prevSkills.map((item, i) =>
									i === index
										? {
												...item,
												experience: e.target.value,
										  }
										: item
								)
							)
						}
						placeholder="Experience in months"
					/>
					<button
						className="btn"
						onClick={() =>
							handleRemoveEntry(index, setSkills)
						}
					>
						Remove
					</button>
				</div>
			))}
			<button
				className="btn"
				onClick={() =>
					setSkills((prevSkills) => [...prevSkills, {}])
				}
			>
				Add Skill
			</button>
		</div>
	);
};

export default Skills;
