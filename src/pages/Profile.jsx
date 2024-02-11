import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
	const { logOut, user } = useAuth();
	const { displayName, photoURL, uid } = user;
	return (
		<>
			<div>Username:{displayName}</div>

			<button onClick={logOut}>Logout</button>
		</>
	);
};

export default Profile;
