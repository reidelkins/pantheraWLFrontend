import { AppShell } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { HeaderMenu } from '../components/HeaderWithMenu';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Pantha NFTs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AppShell header={<HeaderMenu />} style={{ backgroundColor: '#FFF9F0', height: '100vh' }}>
				<Component {...pageProps} />
			</AppShell>
		</>
	);
}

export default MyApp;
