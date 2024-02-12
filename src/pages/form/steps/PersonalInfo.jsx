import React from 'react';

const PersonalInfo = ({personalInfo, handlePersonalInfo}) => {
	return (
		<div>
			<input
				type="text"
				value={personalInfo.name || ''}
				name="name"
				onChange={handlePersonalInfo}
				placeholder="Name"
			/>
			<input
				type="email"
				value={personalInfo.email || ''}
				name="email"
				onChange={handlePersonalInfo}
				placeholder="Email"
			/>
      <input
				type="text"
				value={personalInfo.address || ''}
				name="address"
				onChange={handlePersonalInfo}
				placeholder="Address"
			/>
      <input
				type="text"
				value={personalInfo.phone || ''}
				name="phone"
				onChange={handlePersonalInfo}
				placeholder="Phone"
			/>
			<div>
				<label>
					Gender:
					<div>
						<label>
							<input
								type="radio"
								value="male"
								name="gender"
								checked={personalInfo.gender === 'male'}
								onChange={handlePersonalInfo}
							/>
							Male
						</label>
					</div>
					<div>
						<label>
							<input
								type="radio"
								value="female"
								name="gender"
								checked={personalInfo.gender === 'female'}
								onChange={handlePersonalInfo}
							/>
							Female
						</label>
					</div>
				</label>
			</div>
			<div>
				<label>
					Hobbies (multi-select):
					<div>
						<label>
							<input
								type="checkbox"
								value="Reading"
								name="hobbies"
								checked={
									personalInfo.hobbies &&
									personalInfo.hobbies.includes('Reading')
								}
								onChange={handlePersonalInfo}
							/>
							Reading
						</label>
					</div>
					<div>
						<label>
							<input
								type="checkbox"
								value="Music"
								name="hobbies"
								checked={
									personalInfo.hobbies &&
									personalInfo.hobbies.includes('Music')
								}
								onChange={handlePersonalInfo}
							/>
							Music
						</label>
					</div>
					<div>
						<label>
							<input
								type="checkbox"
								value="Sports"
								name="hobbies"
								checked={
									personalInfo.hobbies &&
									personalInfo.hobbies.includes('Sports')
								}
								onChange={handlePersonalInfo}
							/>
							Sports
						</label>
					</div>
					<div>
						<label>
							<input
								type="checkbox"
								value="Cooking"
								name="hobbies"
								checked={
									personalInfo.hobbies &&
									personalInfo.hobbies.includes('Cooking')
								}
								onChange={handlePersonalInfo}
							/>
							Cooking
						</label>
					</div>
				</label>
			</div>
		</div>
	);
};

export default PersonalInfo;
