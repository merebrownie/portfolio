import React from 'react';
import md5 from 'md5';
import { Heading, List, ListItem, Image, Text, Link, Box } from '@chakra-ui/core';
import Subheader from './components/Subheader';
import SectionHeading from './components/SectionHeading';

const About = () => {
	const emailHash = md5('merebrownie@me.com');
	return (
		<Box as="section" id="about" backgroundColor="grey.100">
			<SectionHeading text="About" />
			<Image
				rounded="full"
				size="25%"
				src={`https://www.gravatar.com/avatar/${emailHash}?s=800`}
				alt="Meredith Fronk"
			/>
			<List className="social center-block">
				<ListItem className="linkedin">
					<Link href="https://www.linkedin.com/in/meredithlbrowne" isExternal>
						{/* <LinkedIn fontSize="large" /> */}
					</Link>
				</ListItem>
				<ListItem className="github">
					<Link href="https://github.com/merebrownie" isExternal>
						{/* <GitHub fontSize="large" /> */}
					</Link>
				</ListItem>
			</List>
			<Heading as="h3" size="lg" fontSize="4xl">
				Education
			</Heading>
			<Subheader as="h4" size="md" fontSize="3xl" text="University of North Carolina - Charlotte" />
			<Text>Bachelor of Arts in Computer Science</Text>
			<Text>Concentration on Web & Mobile Application Development</Text>

			<Subheader as="h4" size="md" fontSize="3xl" text="Appalachian State University" />
			<Text>Bachelor of Science in Communication Disorders</Text>
			<Heading as="h3" size="lg" fontSize="4xl">
				Skills
			</Heading>
			<Text>Node.js</Text>
			<Text>React</Text>
			<Text>MySQL & Microsoft SQL Server</Text>
			<Text>HTML</Text>
			<Text>CSS</Text>
		</Box>
	);
};

export default About;
