import {Box, createStyles, Image } from '@mantine/core';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEventHandler, useEffect, useState } from 'react';
import { LoginButton } from '../components/LoginButton';
import { SignUpButton } from '../components/SignUpButton';

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


const Welcome: NextPage = () => {
	const router = useRouter();

	const { classes } = useStyles();

	const [width, setWidth] = useState(100);

	useEffect(() => {
		setWidth(screen.width);
	}, []);

	return (
		<>	
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
				<div
					style={{
						position: 'absolute',
						zIndex: '1',
						backgroundSize: 'cover',
						height: '100vh',
						width: width,
						top: '0',
						left: '0',
						backgroundRepeat: 'no-repeat',
						backgroundColor: "rgba(0, 0, 0, .35)"
					}}>
						<div  className={classes.links} style={{ zIndex: '2', display: 'flex',  flexDirection: 'row',  }}>
							<div style={{width: "107px"}}></div>
							<div style={{display: 'flex',  flexDirection: 'column', gap:'0px'}}>
								<Box>
									<p
										style={{
											marginTop: '30px',
											width: 'auto',
											height: '118px',
											color: 'black',
											fontFamily: 'Apex',
											fontStyle: 'italic',
											fontWeight: '900',
											fontSize: '90px',
											marginBottom: '0'
										}}
									>
										Panthera WL Marketplace
									</p>
								</Box>
								<Box style={{width: '35vw',}}>
									<p
										style={{
											marginTop:'5px',
											width: 'auto',
											height: '118px',
											color: 'black',
											fontFamily: 'Apex',
											fontStyle: 'italic',
											fontWeight: '900',
											fontSize: '20px',
											lineHeight: '26px',
											margin: '0px',
										}}
									>
										A hastle free whitelist experience so creators, DAOs, and influcers can focus on what they do best, not the boring shit.
									</p>
								</Box>
								<div style={{position: 'absolute', bottom:'30px'}}>
									<SignUpButton />
									<LoginButton />
								</div>
							</div>
						</div>
						<div className={classes.burger} style={{ position: 'absolute', left: '30px', top: '50px' }}>
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
							Panthera WL Marketplace
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
							Welcome to the world where the process of organizing your whitelist and collaborations is hastle free. Letting creators and builders focus on what they do best.
						</p>
						<SignUpButton />
						<LoginButton />
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
