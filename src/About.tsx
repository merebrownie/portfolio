import React, { FC, ReactElement } from 'react';
import md5 from 'md5';
import { Heading, Image, Text, Link, Box, IconButton } from '@chakra-ui/core';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

import Subheader from './components/Subheader';
import SectionHeading from './components/SectionHeading';

const About: FC = (): ReactElement => {
	const emailHash = md5('merebrownie@me.com');
	return (
		<Box as="section" id="about" backgroundColor="grey.100">
			<SectionHeading text="About" />
			<Image
				rounded="full"
				size={{ lg: '25%', md: '40%', sm: '40%' }}
				src={`https://www.gravatar.com/avatar/${emailHash}?s=800`}
				alt="Meredith Fronk"
			/>
			<Box>
				<Link href="https://www.linkedin.com/in/meredithbfronk" isExternal color="grey.150">
					<IconButton
						variant="ghost"
						variantColor="grey.150"
						aria-label="LinkedIn"
						size="lg"
						icon={FiLinkedin}
						mt="3"
						m="2"
					/>
				</Link>
				<Link href="https://github.com/merebrownie" isExternal color="grey.150">
					<IconButton
						variant="ghost"
						variantColor="grey.150"
						aria-label="GitHub"
						size="lg"
						icon={FiGithub}
						mt="3"
						m="1"
					/>
				</Link>
			</Box>
			<Heading as="h3" size="lg" fontSize="4xl">
				Education
			</Heading>
			<Subheader as="h4" size="md" fontSize="lg" text="University of North Carolina - Charlotte" />
			<Text>Bachelor of Arts in Computer Science</Text>
			<Text>Concentration on Web & Mobile Application Development</Text>

			<Subheader as="h4" size="md" fontSize="lg" text="Appalachian State University" />
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
