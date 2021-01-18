import React, { FC, ReactElement } from 'react';
import md5 from 'md5';
import { Heading, Image, Text, Link, Box } from '@chakra-ui/core';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

import Subheader from './components/Subheader';
import SectionHeading from './components/SectionHeading';
import Section from './components/Section';
import IconButton from './components/IconButton';

const About: FC = (): ReactElement => {
	const emailHash = md5('merebrownie@me.com');
	return (
		<Section id="about">
			<SectionHeading text="About" />
			<Image
				rounded="full"
				w={{ xl: '15%', lg: '25%', md: '40%', sm: '40%', xs: '50%' }}
				src={`https://www.gravatar.com/avatar/${emailHash}?s=800`}
				alt="Meredith Fronk"
			/>
			<Box mt="3" mb="3">
				<Link href="https://www.linkedin.com/in/meredithbfronk" isExternal color="grey.300">
					<IconButton label="LinkedIn" icon={FiLinkedin} />
				</Link>
				<Link href="https://github.com/merebrownie" isExternal color="grey.300" ml="1">
					<IconButton label="GitHub" icon={FiGithub} />
				</Link>
			</Box>
			<Heading as="h3" size="lg" fontSize="4xl" mt="5" mb="3">
				Education
			</Heading>
			<Subheader as="h4" size="md" fontSize="lg" text="University of North Carolina - Charlotte" />
			<Text>Bachelor of Arts in Computer Science</Text>
			<Text>Concentration on Web & Mobile Application Development</Text>

			<Subheader as="h4" size="md" fontSize="lg" text="Appalachian State University" />
			<Text>Bachelor of Science in Communication Disorders</Text>
			<Heading as="h3" size="lg" fontSize="4xl" mt="5" mb="3">
				Skills
			</Heading>
			<Text>Node.js</Text>
			<Text>React</Text>
			<Text>GraphQL</Text>
			<Text>MySQL & Microsoft SQL Server</Text>
			<Text>HTML</Text>
			<Text>CSS</Text>
		</Section>
	);
};

export default About;
