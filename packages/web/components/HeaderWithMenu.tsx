import React from 'react';
import { createStyles, Header, Menu, Group, Center, Container, Image } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';
import Link from 'next/link';

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

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	linkLabel: {
		marginRight: 5,
	},
}));

export function HeaderMenu() {
	const { classes } = useStyles();

	return (
		<Header height={56} style={{ border: 'none', backgroundColor: '#FFF9F0' }}>
			<Image src="/Logo.png" alt="Logo" style={{ float: 'left' }} height={70} />
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
				</div>
			</Container>
		</Header>
	);
}
