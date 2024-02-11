/* eslint-disable react/prop-types */
import {
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';
import {
	auth,
	provider,
} from '../../firebase/firebase-config';

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// console.log("from context", user);

	async function signUpWithGoogle() {
		try {
			const result = await signInWithPopup(auth, provider);

			const user = result.user;

			console.log('Signed up with google:', result.user);
			return user;
		} catch (error) {
			console.error('error signing up with google', error);
			throw error;
		}
	}

	async function logOut() {
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(authUser) => {
				if (authUser) {
					setUser(authUser);
				} else {
					setUser(null);
				}
				setLoading(false);
			}
		);

		// unsubscribe();

		return () => {
			unsubscribe();
		};
	}, []);

	const authValue = {
		signUpWithGoogle,
		logOut,
		user,
	};

	if (loading) {
		return <h2>Loading</h2>;
	}

	return (
		<AuthContext.Provider value={authValue}>
			{children}
		</AuthContext.Provider>
	);
}
