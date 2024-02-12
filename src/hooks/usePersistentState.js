import { useState, useEffect } from 'react';

const usePersistentState = (
	localStorageKey,
	defaultValue = 0
) => {
	const [value, setValue] = useState(
		JSON.parse(
			localStorage.getItem(localStorageKey) ||
				JSON.stringify(defaultValue)
		)
	);

	useEffect(() => {
		localStorage.setItem(
			localStorageKey,
			JSON.stringify(value)
		);
	}, [value, localStorageKey]);

	const clearValue = () => {
		localStorage.removeItem(localStorageKey);
		setValue(
			JSON.parse(
				localStorage.getItem(localStorageKey) ||
					JSON.stringify(defaultValue)
			)
		);
	};

	return [value, setValue, clearValue];
};

export default usePersistentState;
