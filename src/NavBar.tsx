import React, { FC, ReactElement, Dispatch, SetStateAction } from 'react';
import { Box, Heading, Flex, useDisclosure } from '@chakra-ui/core';
import NavBarItem from './components/NavBarItem';
import NavDrawer from './NavDrawer';
import ToggleColorMode from './ToggleColorMode';
import IconButton from './components/IconButton';
import { FiMenu } from 'react-icons/fi';

interface IProps {
	colorMode: 'light' | 'dark';
	setColorMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}

const NavBar: FC<IProps> = (props: IProps): ReactElement => {
	const { colorMode, setColorMode } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();

	const bgColor = { light: 'grey.100', dark: 'grey.700' };
	const color = { light: 'grey.300', dark: 'grey.100' };
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			alignItems="center"
			wrap="wrap"
			padding="1.5rem"
			bg={bgColor[colorMode]}
			color={color[colorMode]}
			position="fixed"
			width="full"
			m="0"
			top="0"
			zIndex={1}
		>
			{/* <Flex align="center" mr={5}> */}
			<Heading as="h1" size="2xl" mt="0" mb="0" letterSpacing={'-.1rem'}>
				mb
			</Heading>
			{/* </Flex> */}
			<Box alignContent="right" display={{ base: 'flex', md: 'none' }}>
				<ToggleColorMode colorMode={colorMode} setColorMode={setColorMode} />
				<Box display={{ base: 'flex', md: 'none' }} onClick={onOpen}>
					<IconButton label="Menu" icon={FiMenu} />
				</Box>
			</Box>

			<NavDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
			<Box
				display={{ xs: 'none', sm: 'none', md: 'flex' }}
				width={{ xs: 'full', sm: 'full', md: 'auto' }}
				alignItems="center"
				// flexGrow={2}
				ml="5"
			>
				<NavBarItem href="#home" text="Home" color={color[colorMode]} />
				<NavBarItem href="#about" text="About" color={color[colorMode]} />
				<NavBarItem href="#projects" text="Projects" color={color[colorMode]} />
				<NavBarItem href="#contact" text="Contact" color={color[colorMode]} />
			</Box>
			<Box display={{ xs: 'none', sm: 'none', md: 'flex' }}>
				<ToggleColorMode colorMode={colorMode} setColorMode={setColorMode} />
			</Box>
		</Flex>
	);
};

export default NavBar;
