import { createContext, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ToastContext = createContext();

const useToast = () => {
	return useContext(ToastContext);
};

const ToastProvider = ({ children }) => {
	const onSuccessToast = (text) => {
		toast.success(text);
	};

	const onErrorToast = (text) => {
		toast.error(`${text}`);
	};

	return (
		<ToastContext.Provider
			value={{ onSuccessToast, onErrorToast }}
		>
			<Toaster />
			{children}
		</ToastContext.Provider>
	);
};

export { ToastProvider, useToast };
