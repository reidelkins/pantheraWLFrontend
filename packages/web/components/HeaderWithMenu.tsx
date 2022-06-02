import React, { useState } from 'react';
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
import { ChevronDown } from 'tabler-icons-react';
import Link from 'next/link';
import { useBooleanToggle } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
	inner: {
		height: 56,
		display: 'flex',
		float: 'right',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

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

	dropdown: {
		position: 'absolute',
		top: 56,
		left: '50%',
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		backgroundColor: 'rgba(0,0,0,0.2)',
		overflow: 'hidden',

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: '#b26e2f',
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
					: theme.colors[theme.primaryColor][0],
			color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
		},
	},

	linkLabel: {
		marginRight: 5,
	},
}));

export function HeaderMenu() {
	const { classes } = useStyles();

	const [opened, toggleOpened] = useBooleanToggle(false);
	const [active, setActive] = useState('/');

	return (
		<Header height={56} style={{ border: 'none', backgroundColor: '#FFF9F0' }} fixed>
			<Image src="/hello_pantha_logo.svg" alt="Logo" style={{ float: 'left' }} height={70} />
			<Container mr={20}>
				<div className={classes.inner}>
					<Group spacing={5} className={classes.links}>
						<Link href={'/'}>
							<a className={classes.link}>Home</a>
						</Link>
						<Link href={'/'}>
							<a className={classes.link}>Mint</a>
						</Link>
						<Link href={'/'}>
							<a className={classes.link}>Roadmap</a>
						</Link>
						<Link href={'/'}>
							<a className={classes.link}>Team</a>
						</Link>
						<Menu
							trigger="click"
							delay={0}
							transitionDuration={0}
							placement="end"
							gutter={1}
							style={{ backgroundColor: '#FFF9F0' }}
							// className={classes.links}
							control={
								<a className={classes.link}>
									<Center>
										<span className={classes.linkLabel}>More</span>
										<ChevronDown size={12} />
									</Center>
								</a>
							}
						>
							<Link href={'/collection'}>
								<Menu.Item className={classes.link}>
									<a>Collection</a>
								</Menu.Item>
							</Link>
							<Link href={'/leaderboard'}>
								<Menu.Item className={classes.link}>
									<a>Leaderboard</a>
								</Menu.Item>
							</Link>
							<Link href={'/festival'}>
								<Menu.Item className={classes.link}>
									<a>Panthera Festival</a>
								</Menu.Item>
							</Link>
							<Link href={'/banerator'}>
								<Menu.Item className={classes.link}>
									<a>Banerator</a>
								</Menu.Item>
							</Link>
						</Menu>
						<Link href={'/'}>
							<Image src="/magic-eden.svg" alt="magic-eden" />
						</Link>
						<Link href={'/'}>
							<Image src="/twitter.svg" alt="twitter" />
						</Link>
						<Link href={'/'}>
							<Image src="/discord.svg" alt="discord" />
						</Link>
					</Group>
					<Burger opened={opened} onClick={() => toggleOpened()} size="sm" className={classes.burger} />
					<Transition transition="pop-top-right" duration={200} mounted={opened}>
						{(styles) => (
							<Paper className={classes.dropdown} withBorder style={styles}>
								<Link href={'/'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Home
									</a>
								</Link>
								<Link href={'/'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Mint
									</a>
								</Link>
								<Link href={'/roadmap'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Roadmap
									</a>
								</Link>
								<Link href={'/'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Team
									</a>
								</Link>
								<Link href={'/collection'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Collection
									</a>
								</Link>
								<Link href={'/leaderboard'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Leaderboard
									</a>
								</Link>
								<Link href={'/festival'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Panthera Festival
									</a>
								</Link>
								<Link href={'/banerator'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Banerator
									</a>
								</Link>
								<Link href={'/'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Twitter
										<Image src="twitter.svg" alt="twitter" width={20} style={{ float: 'right' }} />
									</a>
								</Link>
								<Link href={'/'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Discord
										<Image src="discord.svg" alt="discord" width={20} style={{ float: 'right' }} />
									</a>
								</Link>
								<Link href={'/'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Magic Eden
										<Image
											src="magic-eden.svg"
											alt="magic-eden"
											width={20}
											style={{ float: 'right' }}
										/>
									</a>
								</Link>
							</Paper>
						)}
					</Transition>
				</div>
			</Container>
		</Header>
	);
}
