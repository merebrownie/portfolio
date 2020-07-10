import React from 'react';
import { Grid, Typography, Card, Link, CardContent, Button, CardActions, CardMedia } from '@material-ui/core';
import Project from './Project';

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
	<section id="projects" className="projects-section">
		<Typography variant="h2">Projects</Typography>
		<Grid container spacing={10} direction="row">
			{projectList.map(({ name, details, link, image }) => (
				<Project key={name} name={name} details={details} link={link} image={image} />
			))}
		</Grid>
	</section>
);

export default Projects;
