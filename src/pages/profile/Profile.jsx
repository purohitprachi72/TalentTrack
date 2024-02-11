import React from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './profile.module.css';
import { AiOutlineLogout } from 'react-icons/ai';

const Profile = () => {
	const { logOut, user } = useAuth();
	const { displayName, photoURL, uid } = user;

	return (
		<>
			<div className={styles.profilePage}>
				<img src={photoURL} />

				<div>
					Hey! {displayName} welcome to talent track
				</div>

				<button onClick={logOut}>
					<AiOutlineLogout />
					<p>Logout</p>
				</button>
			</div>
		</>
	);
};

export default Profile;
