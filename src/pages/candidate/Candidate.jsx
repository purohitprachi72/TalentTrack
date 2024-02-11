import React from 'react';
import {
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import styles from './Candidate.module.css';
import avatar from '/avatar.png';
import { FaLocationPin } from 'react-icons/fa6';
import { deleteCandidate } from '../../../api';
import MultiStepView from './MultiStepView';

const Candidate = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const { data, loading } = useFetch(id);

	const handleDelete = async () => {
		await deleteCandidate(data.id);
		navigate('/candidate');
	};

	if (loading) {
		return <p>Loading candidate details</p>;
	}

	const hobbies =
		data.hobbies &&
		data.hobbies.map((hobby) => {
			return <li>{hobby}</li>;
		});

	const educationEntries =
		data.education &&
		data.education.map((edu, index) => (
			<div key={index} className={styles.educationEntry}>
				<h4>{edu.institute}</h4>
				<p>{`${edu.degree ?? 'Unknown'}, ${
					edu.pass_out_year ?? 'Unknown'
				}`}</p>
			</div>
		));

	const skillsEntries =
		data.skills &&
		data.skills.map((skill, index) => (
			<div key={index} className={styles.skillEntry}>
				<h4>{skill.name ?? 'Unknown Skill'}</h4>
				<p>{`Experience: ${
					skill.experience ?? 'Unknown'
				} months`}</p>
			</div>
		));

	const experienceEntries =
		data.experience &&
		data.experience.map((exp, index) => (
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

	return (
		<div className={styles.candidatePage}>
			<div className={styles.heading}>
				<h2>Candidate data</h2>
				<div className={styles.actions}>
					<button className="btn">Edit</button>
					<button onClick={handleDelete} className="btn">
						Delete
					</button>
				</div>
			</div>

			<MultiStepView>
				<div className={styles.PersonalInfo}>
					<div className={styles.cardTitle}>
						<h3>Personal Info</h3>
					</div>

					<div className={styles.cardContent}>
						<img
							className={styles.profileImage}
							src={
								data.profile_picture
									? data.profile_picture
									: avatar
							}
							alt="candidate-profile"
						/>
						<div className={styles.cardInfo}>
							<h2>{data.name}</h2>
							<small className={styles.location}>
								<span>
									<FaLocationPin />
								</span>
								{data.address ? data.address : 'India'}
							</small>
							<p>{data.email}</p>
							<p>
								Gender: {data.gender ? data.gender : 'Male'}
							</p>
							<p>Hobbies:</p>
							<ul className={styles.hobbies}>{hobbies}</ul>
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
		</div>
	);
};

export default Candidate;
