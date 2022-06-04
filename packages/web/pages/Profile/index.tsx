import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css';

const Profile: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('visitedPanthera') === null) {
			router.push('/welcome');
		}
	}, [router]);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
			</main>
		</div>
	);
};

export default Profile;
