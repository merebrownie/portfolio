import React from 'react';
import { Box, Heading, Flex, useDisclosure } from '@chakra-ui/core';
import NavBarItem from './components/NavBarItem';
import Drawer from './Drawer';

const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			padding="1.5rem"
			bg="grey.50"
			color="grey.150"
			position="fixed"
			width="full"
			m="0"
			top="0"
			zIndex="99"
		>
			<Flex align="center" mr={5}>
				<Heading as="h1" size="xl" mt="0" mb="0" letterSpacing={'-.1rem'}>
					mb
				</Heading>
			</Flex>
			<Box display={{ base: 'block', md: 'none' }} onClick={onOpen}>
				<svg fill="grey.150" width="1.5em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</Box>
			<Drawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
			<Box
				display={{ xs: 'none', sm: 'none', md: 'flex' }}
				width={{ xs: 'full', sm: 'full', md: 'auto' }}
				alignItems="center"
				flexGrow={1}
				ml="5"
			>
				<NavBarItem href="#home" text="Home" />
				<NavBarItem href="#about" text="About" />
				<NavBarItem href="#projects" text="Projects" />
				<NavBarItem href="#contact" text="Contact" />
			</Box>
		</Flex>
	);
};

export default NavBar;
