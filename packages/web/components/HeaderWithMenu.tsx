import React, { useState } from 'react';
import { createStyles, Header, Menu, Group, Center, Container, Image, Burger, Navbar, Paper, Transition } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';
import Link from 'next/link';
import { useBooleanToggle } from '@mantine/hooks';
import { useRouter } from 'next/router';

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

	const router = useRouter();

	const [opened, toggleOpened] = useBooleanToggle(false);
	const [active, setActive] = useState('/');

	if (router.asPath === '/welcome') return null;

	return (
		<Header height={56} style={{ border: 'none', backgroundColor: '#FFF9F0' }} fixed>
			<Link href={'/welcome'}>
				<a>
					<Image src="/hello_pantha_logo.svg" alt="Logo" style={{ float: 'left' }} height={70} />
				</a>
			</Link>
			<Container mr={20}>
				<div className={classes.inner}>
					<Group spacing={5} className={classes.links}>
						<Link href={'/'}>
							<a className={classes.link}>WL Marketplace</a>
						</Link>
						<Link href={'/Profile'}>
							<a className={classes.link}>Profile</a>
						</Link>
						<Link href={'/'}>
							<a className={classes.link}>Sign Out</a>
						</Link>
						{/* <Link href={'/'}>
							<Image src="/magic-eden.svg" alt="magic-eden" />
						</Link>
						<Link href={'/'}>
							<Image src="/twitter.svg" alt="twitter" />
						</Link>
						<Link href={'/'}>
							<Image src="/discord.svg" alt="discord" />
						</Link> */}
					</Group>
					<Burger opened={opened} onClick={() => toggleOpened()} size="sm" className={classes.burger} />
					<Transition transition="pop-top-right" duration={200} mounted={opened}>
						{(styles) => (
							<Paper className={classes.dropdown} withBorder style={styles}>
								<Link href={'/'}>
									<a style={{ color: 'black' }} className={classes.link}>
										WL Marketplace
									</a>
								</Link>
								<Link href={'/Profile'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Profile
									</a>
								</Link>
								<Link href={'/roadmap'}>
									<a style={{ color: 'black' }} className={classes.link}>
										Sign Out
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
