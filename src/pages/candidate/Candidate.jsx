import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import styles from './Candidate.module.css';
import avatar from '../../assets/avatar.png';
import { FaLocationPin } from 'react-icons/fa6';

const Candidate = () => {
	const { id } = useParams();

	const { data, loading } = useFetch(id);

	console.log(data);

	if (loading) {
		return <p>Loading candidate details</p>;
	}

	return (
		<div className={styles.candidatePage}>
			<div className={styles.heading}>
				<h2>Candidate data</h2>
				<div className={styles.actions}>
					<button className="btn">Edit</button>
					<button className="btn">Delete</button>
				</div>
			</div>

			<div className={styles.info}>
				<img
					src={
						data.profile_picture
							? data.profile_picture
							: avatar
					}
					alt="candidate-profile"
				/>
				<div className={styles.cardInfo}>
					<h2>{data.name}</h2>
					<small>
						<span>
							<FaLocationPin />
						</span>
						{data.address}
					</small>
					<p>{data.email}</p>
				</div>
			</div>
		</div>
	);
};

export default Candidate;
