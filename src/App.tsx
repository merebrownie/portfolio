import React, { FC, ReactElement, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import theme from './theme';
import { CSSReset, ThemeProvider, Grid } from '@chakra-ui/core';
import Footer from './Footer';
import { ColorModeContext } from './colorModeContext';

const App: FC = (): ReactElement => {
	const localColorMode = localStorage.getItem('colorMode') === 'dark' ? 'dark' : 'light';
	const [colorMode, setColorMode] = useState<'light' | 'dark'>(localColorMode);

	const bgColor = { light: 'lavender.100', dark: 'grey.900' };
	const color = { light: 'black', dark: 'grey.200' };

	return (
		<ThemeProvider theme={theme}>
			<ColorModeContext.Provider value={{ colorMode }}>
				<CSSReset />
				<NavBar colorMode={colorMode} setColorMode={setColorMode} />
				<Grid m="1%" backgroundColor={bgColor[colorMode]} color={color[colorMode]}>
					<Intro />
					<About />
					<Projects />
					<Contact />
				</Grid>
				<Footer />
			</ColorModeContext.Provider>
		</ThemeProvider>
	);
};

export default App;
