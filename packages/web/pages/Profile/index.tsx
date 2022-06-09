import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';



const Profile: NextPage = () => {
	const [panthas, setPanthas] = useState<any>([]);
	// const [items2, setItems2] = useState<any>([]);
	// const [selected, setSelected] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			const largestwhales = await (await fetch('http://127.0.0.1:8000/api/panthas/')).json();
			// const highestsales = await (await fetch('api/highestsales')).json();
			// largestwhales.sort((a, b) => (a.rank > b.rank) ? 1 : -1)
			// highestsales.sort((a, b) => (a.rank > b.rank) ? 1 : -1)
			const sortedWhales = largestwhales.sort((a: any, b: any) => {
				return (a['Rank'] < b['Rank']) ? -1 : 1;
			});
			// const sortedSales = highestsales.sort((a: any, b: any) => {
			// 	return (a['Rank'] < b['Rank']) ? -1 : 1;
			// });

			setPanthas(largestwhales);
		};

		fetchItems();
	}, []);
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem('visitedPanthera') === null) {
			router.push('/welcome');
		}
	}, [router]);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1>Profile Page</h1>
				<h2>{panthas[0]?.user}</h2>
			</main>
		</div>
	);
};

export default Profile;
