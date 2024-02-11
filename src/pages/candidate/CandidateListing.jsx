import { Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import styles from './CandidateListing.module.css';
import avatar from '/avatar.png';
import { FaLocationPin } from 'react-icons/fa6';

const CandidateListing = ({ handleSelect }) => {
	const { data, loading } = useFetch();

	const navigate = useNavigate();

	const handleNavigate = () => {
		handleSelect();
		navigate('/candidate/new');
	};

	if (loading) {
		return <h2>Loading List..</h2>;
	}

	return (
		<div className={styles.CandidateListing}>
			<div className={styles.heading}>
				<h2>CandidateListing</h2>
				<button className="btn" onClick={handleNavigate}>
					add new
				</button>
			</div>

			<div className={styles.listing}>
				{data.map((candidate) => (
					<Link
						key={candidate.id}
						to={candidate.id}
						onClick={handleSelect}
					>
						<div className={styles.listingCard}>
							<img
								src={
									candidate.profile_picture
										? candidate.profile_picture
										: avatar
								}
								alt="candidate-profile"
							/>
							<div className={styles.cardInfo}>
								<h2>{candidate.name}</h2>
								<small>
									<span>
										<FaLocationPin />
									</span>
									{candidate.address}
								</small>
								<p>{candidate.email}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CandidateListing;
