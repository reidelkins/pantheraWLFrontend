import { BackgroundImage, Container, createStyles, Image } from '@mantine/core';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEventHandler, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const useStyles = createStyles((theme) => ({
	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},
	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},
}));

const EnterButton = ({ onClick }: any) => {
	return <Image src="enter_button.svg" alt="enter" onClick={onClick} style={{ width: '300px', cursor: 'pointer' }} />;
};

const Welcome: NextPage = () => {
	const router = useRouter();

	const { classes } = useStyles();

	const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		localStorage.setItem('visitedPanthera', 'true');
		router.push('/');
	};

	const [width, setWidth] = useState(100);

	useEffect(() => {
		setWidth(screen.width);
	}, []);

	return (
		<>
			<div
				style={{
					backgroundImage: "url('hello_pantha_logo.svg')",
					position: 'absolute',
					backgroundSize: 'cover',
					height: '280px',
					width: '280px',
					top: '150px',
					left: '380px',
					// zIndex: '0',
					backgroundRepeat: 'no-repeat',
				}}
			/>
			<div
				style={{
					backgroundColor: 'green',
					// backgroundImage: "url('hello_pantha_logo.svg')",
					position: 'absolute',
					// backgroundSize: 'cover',
					height: '365px',
					width: '130px',
					top: '38px',
					left: '663px',
					// zIndex: '0',
					// backgroundRepeat: 'no-repeat',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					height: '115px',
					width: '152px',
					top: '160px',
					left: '138px',
					backgroundColor: 'green',
					transform: 'skew(0.02turn, 347deg)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					height: '110px',
					width: '140px',
					top: '256px',
					left: '183px',
					backgroundColor: 'blue',
					transform: 'skew(12deg, 346deg)',
				}}
			/>
			<div
				style={{
					backgroundImage: "url('welcome_background.png')",
					position: 'absolute',
					// zIndex: '1',
					backgroundSize: 'cover',
					height: '100vh',
					width: width,
					top: '0',
					left: '0',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className={classes.links} style={{ position: 'absolute', left: '107px', top: '310px', width: '70vw' }}>
					<p
						style={{
							width: 'auto',
							height: '118px',
							color: 'black',
							fontFamily: 'Apex',
							fontStyle: 'italic',
							fontWeight: '900',
							fontSize: '90px',
							// marginBottom: '40px',
						}}
					>
						Welcome To Panthera
					</p>
					<p
						style={{
							width: '444px',
							height: '118px',
							color: 'black',
							fontFamily: 'Apex',
							fontStyle: 'italic',
							fontWeight: '900',
							fontSize: '20px',
							lineHeight: '26px',
							margin: '0',
						}}
					>
						Pathera is a city consisting of 10,000 unique, diverse, and selfless species. Full of culture and vibes.
					</p>
					<EnterButton onClick={onClick} />
					<div
						style={{
							position: 'absolute',
							width: '120px',
							height: '21px',
							right: '0px',
							bottom: '50px',
							fontFamily: 'Microsoft YaHei',
							fontStyle: 'normal',
							fontWeight: '400',
							fontSize: '16px',
							lineHeight: '21px',
							color: 'black',
							margin: '0',
						}}
					>
						follow us on
						<a target="_blank" rel="noopener noreferrer" href="https://discord.com">
							<Image src="discord.svg" alt="discord" style={{ float: 'left', cursor: 'pointer' }} />
						</a>
						<a target="_blank" rel="noopener noreferrer" href="https://magiceden.io/">
							<Image src="magic-eden.svg" alt="magic-eden" style={{ float: 'left', cursor: 'pointer' }} />
						</a>
						<a target="_blank" rel="noopener noreferrer" href="https://twitter.com">
							<Image src="twitter.svg" alt="twitter" style={{ float: 'left', cursor: 'pointer' }} />
						</a>
					</div>
				</div>
				<div className={classes.burger} style={{ position: 'absolute', left: '30px', top: '310px' }}>
					<p
						style={{
							// width: 'auto',
							height: '118px',
							color: 'black',
							fontFamily: 'Apex',
							fontStyle: 'italic',
							fontWeight: '600',
							fontSize: '60px',
							// marginLeft: '0',
						}}
					>
						Welcome To Panthera
					</p>
					<p
						style={{
							width: '400px',
							height: '118px',
							color: 'black',
							fontFamily: 'Apex',
							// fontStyle: 'italic',
							fontWeight: '400',
							fontSize: '20px',
							lineHeight: '26px',
						}}
					>
						Pathera is a city consisting of 10,000 unique, diverse, and selfless species. Full of culture and vibes.
					</p>
					<EnterButton onClick={onClick} />
					<div
						style={{
							position: 'absolute',
							width: '120px',
							height: '21px',
							right: '0px',
							bottom: '50px',
							fontFamily: 'Microsoft YaHei',
							fontStyle: 'normal',
							fontWeight: '400',
							fontSize: '16px',
							lineHeight: '21px',
							color: 'black',
							margin: '0',
						}}
					>
						follow us on
						<a target="_blank" rel="noopener noreferrer" href="https://discord.com">
							<Image src="discord.svg" alt="discord" style={{ float: 'left', cursor: 'pointer' }} />
						</a>
						<a target="_blank" rel="noopener noreferrer" href="https://magiceden.io/">
							<Image src="magic-eden.svg" alt="magic-eden" style={{ float: 'left', cursor: 'pointer' }} />
						</a>
						<a target="_blank" rel="noopener noreferrer" href="https://twitter.com">
							<Image src="twitter.svg" alt="twitter" style={{ float: 'left', cursor: 'pointer' }} />
						</a>
					</div>
				</div>
			</div>
		</>
	);

	// return (
	// <Image
	// 	src="welcome_background.png"
	// 	alt="background"
	// 	style={{ position: 'absolute', height: '100vh', width: '100vw', top: '0', left: '0' }}
	// >
	{
		/* <main> */
	}
	{
		/* <main style={{ position: 'absolute', height: '100vh', width: '100vw' }}> */
	}

	{
		/* </main> */
	}
	// </Image>
	// );
};

export default Welcome;
