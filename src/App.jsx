import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import theme from './theme';
import { ThemeProvider, Grid } from '@chakra-ui/core';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Grid backgroundColor="lavender" color="black">
				<Intro />
				<About />
				<Projects />
				<Contact />
			</Grid>
		</ThemeProvider>
	);
};

export default App;
