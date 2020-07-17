import React from 'react';
import { Heading } from '@chakra-ui/core';
import Button from './components/Button';
import Subheader from './components/Subheader';
import Section from './components/Section';

const Intro = () => (
	<Section id="home" backgroundColor="lavender.100" height="90vh">
		<Heading as="h1" size={{ lg: '2xl', md: 'xl', sm: 'lg' }} fontSize="6xl" mt="20%">
			Meredith Browne Fronk
		</Heading>
		<Subheader
			text="Web Development Portfolio"
			as="h2"
			size={{ lg: 'xl', md: 'lg', sm: 'md' }}
			fontSize="5xl"
			fontWeight="normal"
			fontFamily="mono"
		/>
		<Button href="#about" text="Learn More" />
	</Section>
);

export default Intro;
