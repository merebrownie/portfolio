import React from 'react';
import { Box, Image, Text } from '@chakra-ui/core';
import Button from './components/Button';

const Project = ({ name, details, link, image }) => {
	return (
		<Box padding="5">
			<Text fontWeight="bold" textTransform="uppercase" fontSize="sm" letterSpacing="wide" mb="3">
				{name}
			</Text>
			<Box flexShrink="0" m="3">
				<Image rounded="lg" src={image} alt={`${name} screenshot`} />
			</Box>
			<Box ml="0" mt={{ base: 4, md: 0 }} mb={5}>
				{details.map((detail) => (
					<Box key={detail} letterSpacing="wide" fontSize="xs" mb="0" mt="0">
						<Text>{detail}</Text>
					</Box>
				))}
			</Box>
			<Box>
				<Button href={link} text="View" />
			</Box>
		</Box>
	);
};

export default Project;
