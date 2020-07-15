import React, { FC, ReactElement } from 'react';
import './App.css';
import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import theme from './theme';
import { CSSReset, ThemeProvider, Grid } from '@chakra-ui/core';

const App: FC = (): ReactElement => {
	return (
		<ThemeProvider theme={theme}>
			<CSSReset />
			<NavBar />
			<Grid backgroundColor="lavender" m="1%" color="black">
				<Intro />
				<About />
				<Projects />
				<Contact />
			</Grid>
		</ThemeProvider>
	);
};

export default App;
