import React from 'react';

const Education = ({education, setEducation, handleRemoveEntry}) => {
	return (
		<div>
			{education.map((edu, index) => (
				<div key={index}>
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
						value={edu.year_of_graduation}
						onChange={(e) =>
							setEducation((prevEducation) =>
								prevEducation.map((item, i) =>
									i === index
										? {
												...item,
												year_of_graduation: e.target.value,
										  }
										: item
								)
							)
						}
						placeholder="Year of Graduation"
					/>
					<button
						onClick={() =>
							handleRemoveEntry(index, setEducation)
						}
					>
						Remove
					</button>
				</div>
			))}
			<button
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
