import React from 'react';
import Project from './Project';
import { SimpleGrid } from '@chakra-ui/core';
import SectionHeading from './components/SectionHeading';
import Section from './components/Section';

const projectList = [
	{
		name: 'Master of My Music',
		details: ['Created for ITIS3105', 'PHP Web Application', 'MySQL Database', 'Admin Functionality'],
		link: 'https://momm.meredith-browne.com',
		image: process.env.PUBLIC_URL + '/momm-min.jpeg',
	},
	{
		name: 'Stone Center',
		details: ['Created for ITIS2300', 'Intro to Web Application Development', 'HTML, CSS, & JavaScript'],
		link: 'https://sc.meredith-browne.com',
		image: process.env.PUBLIC_URL + '/stone-center.jpg',
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
		link: 'https://spotfinder.meredith-browne.com',
		image: process.env.PUBLIC_URL + '/spot-finder.jpg',
	},
	{
		name: 'Fraction Concentration',
		details: ['Created for ITIS3150', 'Rapid Prototyping', 'High Fidelity Axure Prototype'],
		link: 'https://fc.meredith-browne.com',
		image: process.env.PUBLIC_URL + '/fraction-concentration.jpeg',
	},
	{
		name: 'World Cities',
		details: [
			'Created for ITIS4166',
			'Network-Based Application Development',
			'Integrates Google Maps API',
			'Bootstrap Framework',
		],
		link: 'https://wc.meredith-browne.com',
		image: process.env.PUBLIC_URL + '/world-cities.jpg',
	},
];

const Projects = () => (
	<Section id="projects" backgroundColor="lavender">
		<SectionHeading text="Projects" />
		<SimpleGrid columns={{ lg: 3, md: 2, sm: 1 }} gap={5}>
			{projectList.map(({ name, details, link, image }) => (
				<Project key={name} name={name} details={details} link={link} image={image} />
			))}
		</SimpleGrid>
	</Section>
);

export default Projects;
