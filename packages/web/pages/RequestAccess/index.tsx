import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import RequestAccessForm from '../../components/RequestAcessForm';

const RequestAccess: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('visitedPanthera') === null) {
			router.push('/welcome');
		}
	}, [router]);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<RequestAccessForm />
			</main>
		</div>
	);
};

export default RequestAccess;
