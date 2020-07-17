import React, { FC, ReactElement, useState } from 'react';
import NavBar from './NavBar';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import theme from './theme';
import { CSSReset, ThemeProvider, Grid, Box } from '@chakra-ui/core';
import Footer from './Footer';
import { ColorModeContext } from './colorModeContext';

const App: FC = (): ReactElement => {
	const localColorMode = localStorage.getItem('colorMode') === 'dark' ? 'dark' : 'light';
	const [colorMode, setColorMode] = useState<'light' | 'dark'>(localColorMode);

	const bgColor = { light: 'lavender.100', dark: 'grey.900' };
	const color = { light: 'black', dark: 'grey.200' };
	const bgImage = {
		light: `url('${process.env.PUBLIC_URL}/grey-floral.png')`,
		dark: `url('${process.env.PUBLIC_URL}/camo.png')`,
	};

	return (
		<ThemeProvider theme={theme}>
			<ColorModeContext.Provider value={{ colorMode }}>
				<CSSReset />
				<NavBar colorMode={colorMode} setColorMode={setColorMode} />
				<Box
					pl="1.5%"
					pr="1.5%"
					top="0"
					bottom="0"
					width="100%"
					height="100%"
					backgroundImage={bgImage[colorMode]}
				>
					<Grid textAlign="center" backgroundColor={bgColor[colorMode]} color={color[colorMode]}>
						<Intro />
						<About />
						<Projects />
						<Contact />
					</Grid>
				</Box>
				<Footer />
			</ColorModeContext.Provider>
		</ThemeProvider>
	);
};

export default App;
