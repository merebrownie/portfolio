import React from 'react';
import md5 from 'md5';
import { Typography, Link, List, ListItem } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';

const About = () => {
	const emailHash = md5('merebrownie@me.com');
	return (
		<section>
			<Typography variant="h2">About</Typography>
			<img
				src={`https://www.gravatar.com/avatar/${emailHash}?s=800`}
				id="mere-pic"
				className="img-circle"
				height="50%"
				width="50%"
			/>
			<List className="social center-block">
				<ListItem className="linkedin">
					<Link href="https://www.linkedin.com/in/meredithlbrowne">
						<LinkedIn fontSize="large" />
					</Link>
				</ListItem>
				<ListItem className="github">
					<Link href="https://github.com/merebrownie">
						<GitHub fontSize="large" />
					</Link>
				</ListItem>
			</List>
			<Typography variant="h3">Education</Typography>
			<Typography variant="h4">University of North Carolina - Charlotte</Typography>
			<Typography variant="body1">Bachelor of Arts in Computer Science</Typography>
			<Typography variant="body1">Concentration on Web & Mobile Application Development</Typography>

			<Typography variant="h4">Appalachian State University</Typography>
			<Typography variant="body1">Bachelor of Science in Communication Disorders</Typography>
			<Typography variant="h3">Skills</Typography>
			<List>
				<ListItem>Node.js</ListItem>
				<ListItem>React</ListItem>
				<ListItem>MySQL & Microsoft SQL Server</ListItem>
				<ListItem>HTML</ListItem>
				<ListItem>CSS</ListItem>
			</List>
		</section>
	);
};

export default About;
