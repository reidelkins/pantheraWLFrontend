import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import {
	createStyles,
	Header,
	Menu,
	Group,
	Center,
	Container,
	Image,
	Burger,
	Navbar,
	Paper,
	Transition,
} from '@mantine/core';

const Home: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('visitedPanthera') === null) {
			router.push('/welcome');
		}
	}, [router]);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				{/* <Image src="/hello_pantha_logo.svg" alt="logo" style={{ top: '0', position: 'absolute' }} /> */}
				<h1>Homepage Content</h1>
			</main>
		</div>
	);
};

export default Home;
