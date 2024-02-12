import { createContext, useContext, useState } from 'react';

const DataContext = createContext({
	candidateData: [],
});

const DataProvider = ({ children }) => {
	const [candidatesData, setCandidatesData] = useState([]);
	const [candidateData, setCandidateData] = useState({});
	const [isEditing, setIsEditing] = useState(false);

	// console.log('from context', candidatesData);

	const deleteCandidateFromContext = (id) => {
		setIsEditing(false);
		const newData = candidatesData.filter(
			(candidate) => candidate.id !== id
		);
		setCandidatesData(newData);
	};

	const editCandidateFromContext = (id, newData) => {
		const editedData = candidatesData.map((candidate) => {
			return candidate.id === id ? newData : candidate;
		});
		setCandidatesData(editedData);
	};

	const addNewCandidateData = (payload) => {
		setCandidatesData((prev) => {
			return [...prev, payload];
		});
	};

	const dataValues = {
		candidatesData,
		setCandidatesData,
		deleteCandidateFromContext,
		editCandidateFromContext,
		candidateData,
		setCandidateData,
		isEditing,
		setIsEditing,
		addNewCandidateData
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
