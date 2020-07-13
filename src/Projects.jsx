import React from 'react';
import Project from './Project';
import { Heading, Grid, Box, Link, Text, Image, SimpleGrid } from '@chakra-ui/core';
import theme from './theme';
import SectionHeading from './components/SectionHeading';

const projectList = [
	{
		name: 'Master of My Music',
		details: ['Created for ITIS3105', 'PHP Web Application', 'MySQL Database', 'Admin Functionality'],
		link: 'https://momm.meredith-browne.com',
		image: '/public/momm-min.jpeg',
	},
	{
		name: 'Stone Center',
		details: ['Created for ITIS2300', 'Intro to Web Application Development', 'HTML, CSS, & JavaScript'],
		link: 'projects/stonecenter/',
		image: '/public/stone-center.jpg',
	},
	{
		name: 'SpotFinder',
		details: [
			'Created for ITIS3130',
			'Human-Computer Interaction',
			'Mobile Application Prototype',
			'HTML, CSS, & JavaScript',
			'Google Maps API',
		],
		link: 'projects/spotfinder/',
		image: '/public/spot-finder.jpg',
	},
	{
		name: 'Fraction Concentration',
		details: ['Created for ITIS3150', 'Rapid Prototyping', 'High Fidelity Axure Prototype'],
		link: 'projects/axure_prototype/',
		image: '/public/fraction-concentration.jpeg',
	},
	{
		name: 'World Cities',
		details: [
			'Created for ITIS4166',
			'Network-Based Application Development',
			'Integrates Google Maps API',
			'Bootstrap Framework',
		],
		link: 'projects/worldcities/',
		image: '/public/world-cities.jpg',
	},
];

const Projects = () => (
	<Box as="section" id="projects" className="projects-section" style={{ backgroundColor: theme.colors.lavender }}>
		<SectionHeading text="Projects" />
		<SimpleGrid
			//minChildWidth="20%"
			columns={{ lg: 3, md: 2, sm: 1 }}
			gap={5}
			//templateColumns="repeat(3, 1fr)"
		>
			{projectList.map(({ name, details, link, image }) => (
				<Project key={name} name={name} details={details} link={link} image={image} />
			))}
		</SimpleGrid>
	</Box>
);

export default Projects;
