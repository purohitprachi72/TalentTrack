import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(true);

	const userLogin = () => {
		setLoginState(true);
	};

	const userLogout = () => {
		setLoginState(false);
	};

	const value = {
		userLogin,
		userLogout,
		loginState,
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	return useContext(AuthContext);
};

export { AuthProvider, useAuth };
