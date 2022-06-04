import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import LoginForm from '../../components/LoginForm';

const Login: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('visitedPanthera') === null) {
			router.push('/welcome');
		}
	}, [router]);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<LoginForm />
			</main>
		</div>
	);
};

export default Login;
