import React, { useEffect, useState } from 'react';
import {
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import styles from './Candidate.module.css';
import avatar from '/avatar.png';
import { FaLocationPin } from 'react-icons/fa6';
import { deleteCandidate } from '../../../api/api';
import MultiStepView from './MultiStepView';
import { useData } from '../../context/DataContext';
import { BASEURL } from '../../constants/constant';

const Candidate = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { deleteCandidateFromContext } = useData();
	const { isEditing, setIsEditing } = useData();

	const [candidateData, setCandidateData] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		try {
			setLoading(true);
			const response = await fetch(`${BASEURL}/${id}`);
			if (!response.ok) {
				throw new Error(
					`Failed to fetch candidate data: ${response.statusText}`
				);
			}
			const data = await response.json();
			setCandidateData(data);
			console.log(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [id]);

	const handleEdit = async () => {
		setIsEditing(true);
		localStorage.clear();
		navigate(`/candidate/${id}/edit`, {
			state: { candidateData, route: 'edit' },
		});
	};

	const handleDelete = async () => {
		deleteCandidateFromContext(id);
		await deleteCandidate(candidateData.id);
		localStorage.clear();
		navigate('/candidate');
	};

	const hobbies = candidateData ? (
		candidateData.hobbies.map((hobby) => {
			return <li>{hobby}</li>;
		})
	) : (
		<h2>loading...</h2>
	);

	const educationEntries =
		candidateData?.education &&
		candidateData.education.map((edu, index) => (
			<div key={index} className={styles.educationEntry}>
				<h4>{edu.institute}</h4>
				<p>{`${edu.degree ?? 'Unknown'}, ${
					edu.pass_out_year ?? 'Unknown'
				}`}</p>
			</div>
		));

	const skillsEntries =
		candidateData?.skills &&
		candidateData.skills.map((skill, index) => (
			<div key={index} className={styles.skillEntry}>
				<h4>{skill.name ?? 'Unknown Skill'}</h4>
				<p>{`Experience: ${
					skill.experience ?? 'Unknown'
				} months`}</p>
			</div>
		));

	const experienceEntries =
		candidateData?.experience &&
		candidateData.experience.map((exp, index) => (
			<div key={index} className={styles.experienceEntry}>
				<h4>{exp.company ?? 'Unknown Company'}</h4>
				<p>{`${exp.role ?? 'Unknown Role'} - ${
					exp.project ?? 'Unknown Project'
				}`}</p>
				<p>{`Duration: ${
					exp.duration_from ?? 'Unknown'
				} - ${exp.duration_to ?? 'Unknown'}`}</p>
			</div>
		));

	if (loading) {
		return <h2>loading candidate info ...</h2>;
	}

	return (
		<div className={styles.candidatePage}>
			<div className={styles.heading}>
				<h2>Candidate data</h2>
				<div className={styles.actions}>
					<button onClick={handleEdit} className="btn">
						Edit
					</button>
					<button onClick={handleDelete} className="btn">
						Delete
					</button>
				</div>
			</div>

			{candidateData ? (
				<MultiStepView>
					<div className={styles.PersonalInfo}>
						<div className={styles.cardTitle}>
							<h3>Personal Info</h3>
						</div>

						<div className={styles.cardContent}>
							<img
								className={styles.profileImage}
								src={
									candidateData.profile_picture
										? candidateData.profile_picture
										: avatar
								}
								alt="candidate-profile"
							/>
							<div className={styles.cardInfo}>
								<h2>{candidateData.name}</h2>
								<small className={styles.location}>
									<span>
										<FaLocationPin />
									</span>
									{candidateData.address
										? candidateData.address
										: 'India'}
								</small>
								<p>{candidateData.email}</p>
								<p>
									Gender:{' '}
									{candidateData.gender
										? candidateData.gender
										: 'Male'}
								</p>
								<p>Hobbies:</p>
								<ul className={styles.hobbies}>
									{hobbies}
								</ul>
							</div>
						</div>
					</div>

					<div className={styles.Education}>
						<h3>Education</h3>
						{educationEntries}
					</div>

					<div className={styles.Skills}>
						<h3>Skills</h3>
						{skillsEntries}
					</div>

					<div className={styles.Experience}>
						<h3>Experience</h3>
						{experienceEntries}
					</div>
				</MultiStepView>
			) : (
				<h2>loading</h2>
			)}
		</div>
	);
};

export default Candidate;
