import React from 'react';
import {
	CssBaseline,
	ThemeProvider,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Grid,
	Container,
} from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import theme from './theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container>
				<Intro />
				<About />
				<Projects />
				<Contact />
			</Container>
			{/* <Grid container direction="row">
				<Grid item xs={12}>
					<Intro />
				</Grid>
				<Grid item xs={12}>
					<About />
				</Grid>
				<Grid item xs={12}>
					<Projects />
				</Grid>
				<Grid item xs={12}>
					<Contact />
				</Grid>
			</Grid> */}
			{/* <AppBar position="fixed">
				<Toolbar>content</Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Meredith Browne</Typography>
			</AppBar> */}
			{/* <NavBar /> */}
		</ThemeProvider>
	);
};

export default App;
