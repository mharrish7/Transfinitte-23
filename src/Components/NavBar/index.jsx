import { Text } from "@mantine/core";
import logo from "../../assets/logo.svg";
import tclogo from "../../assets/tc.svg";
import scient from "../../assets/scient.png";
import nittlogo from "../../assets/nittlogo.png";
import "./index.css";
import {
	Burger,
	Container,
	createStyles,
	Group,
	Header,
	Paper,
	Transition,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import {motion} from "framer-motion";
import { useNavigate } from "react-router";

const HEADER_HEIGHT = "3.5rem";

const useStyles = createStyles((theme) => ({
	root: {
		position: "absolute",
		zIndex: 1,
		backgroundColor: "rgba(0,0,0,0)",
		borderColor: "rgba(0,0,0,0)",
	},

	dropdown: {
		position: "absolute",
		top: "4rem",
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: "hidden",
		fontFamily: "Montserrat",
		backgroundColor: "rgba(0,0,0,0.5)",
		borderColor: "#ECECEC",
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: "100%",
		padding: "1rem 2rem",
	},

	links: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	burger: {
		backgroundColor: "none",
		border: "1px #ECECEC solid",
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		cursor: "pointer",
		padding: "0.5rem 0.75rem",
		textDecoration: "none",
		borderRadius: 0,
		color: "#ECECEC",
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		transition: "0.3s",
		"&:hover": {
			color: "white",
			backgroundColor: "rgba(0,0,0,0.3)",
		},

		[theme.fn.smallerThan("sm")]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},
	blue: {
		color: "cyan",
	},
}));

const NavBar = () => {
	const links = [{'label' : "About US", url : "#aboutus"},
	{'label' : "Contact", url : "#contact"},
	{'label' : "Sponsors", url : "#sponsors"},
	{'label' : "Timeline", url : "#timeline"},
	{'label' : "FaQs", url : "#faqs"},
	{'label' : "Judges", url : "#judges"}];

	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);
	const { classes, cx } = useStyles();
	const navigate = useNavigate();
	const items = links.map((link) => (
		<a
			key={link.label}
			className={classes.link}
			href={link.url}
		>
			{link.label}
		</a>
	));
	return (
		<Header height={HEADER_HEIGHT} className={classes.root}>
			<Container className={classes.header} fluid>
				<Text
					sx={(theme) => ({
						fontFamily: "Montserrat",
						color: "white",
						fontSize: theme.fontSizes.xl,
						fontWeight: 700,
						zIndex: 100,
						"@media (max-width: 900px)": {
							fontSize: theme.fontSizes.lg,
							margin: "0rem",
						}, 
					})}
				>
				<div style={{display : "flex", alignItems : "center", justifyContent : "center"}}>
					<motion.img src={nittlogo} drag dragConstraints = {{left : 0, right : 0, top : 0, bottom : 0}} dragElastic = {1} transition = {{duration : 0.5}} className="logos"></motion.img>
					<motion.img src={tclogo} drag dragConstraints = {{left : 0, right : 0, top : 0, bottom : 0}} dragElastic = {1} transition = {{duration : 0.5}} className="logos"></motion.img>
					<motion.img src={scient} drag dragConstraints = {{left : 0, right : 0, top : 0, bottom : 0}} dragElastic = {1} transition = {{duration : 0.5}} className="logos"></motion.img>
					<motion.img src={logo} drag dragConstraints = {{left : 0, right : 0, top : 0, bottom : 0}} dragElastic = {1} transition = {{duration : 0.5}} className="logos"></motion.img>

				</div>
					

				</Text>
				<Group
					spacing={2}
					className={classes.links}
					sx={{ fontFamily: "Montserrat" }}
				>
					{items}
				</Group>

				<Burger
					opened={opened}
					onClick={toggle}
					className={classes.burger}
					size="sm"
					color="#ECECEC"
				/>

				<Transition
					transition="pop-top-right"
					duration={200}
					mounted={opened}
				>
					{(styles) => (
						<Paper
							className={classes.dropdown}
							withBorder
							style={styles}
						>
							{items}
						</Paper>
					)}
				</Transition>
			</Container>
		</Header>
	);
};

export default NavBar;