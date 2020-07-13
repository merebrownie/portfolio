import React from 'react';
import { Heading, Link, Box } from '@chakra-ui/core';
import Button from './components/Button';
import Subheader from './components/Subheader';

const Intro = () => (
	<Box as="section" id="home" backgroundColor="lavender">
		<Heading as="h1" size={{ lg: '2xl', md: 'xl', sm: 'lg' }} fontSize="6xl">
			Meredith Browne Fronk
		</Heading>
		<Subheader text="Web Development Portfolio" as="h2" size={{ lg: 'xl', md: 'lg', sm: 'md' }} fontSize="5xl" />
		<Button href="#about" text="Learn More" />
	</Box>
);

export default Intro;
