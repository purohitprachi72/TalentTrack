import React from 'react';

const Skills = ({skills, setSkills, handleRemoveEntry}) => {
	return (
		<div>
			{skills.map((skill, index) => (
				<div key={index}>
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
						onClick={() =>
							handleRemoveEntry(index, setSkills)
						}
					>
						Remove
					</button>
					{/* Add more skills fields if needed */}
				</div>
			))}
			<button
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
