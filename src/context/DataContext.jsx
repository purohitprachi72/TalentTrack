import { createContext, useContext, useState } from 'react';

const DataContext = createContext({
	candidateData: [],
});

const DataProvider = ({ children }) => {
	const [candidatesData, setCandidatesData] = useState([]);

	// console.log('from context', candidatesData);

	const deleteCandidateFromContext = (id) => {
		const newData = candidatesData.filter(
			(candidate) => candidate.id !== id
		);
		setCandidatesData(newData);
	};

	const dataValues = {
		candidatesData,
		setCandidatesData,
    deleteCandidateFromContext
	};

	return (
		<DataContext.Provider value={dataValues}>
			{children}
		</DataContext.Provider>
	);
};

const useData = () => {
	return useContext(DataContext);
};

export { DataProvider, useData };
