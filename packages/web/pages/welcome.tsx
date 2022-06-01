import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';
import styles from '../styles/Home.module.css';

const Welcome: NextPage = () => {
	const router = useRouter();

	const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		localStorage.setItem('visitedPanthera', 'true');
		router.push('/');
	};

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1>Welcome To Panthera</h1>
				<p>
					Pathera is a city consisting of 10,000 unique, diverse, and selfless species. Full of culture and
					vibes.
				</p>
				<button onClick={onClick}>Enter</button>
			</main>
		</div>
	);
};

export default Welcome;
