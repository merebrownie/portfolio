import React, { FC, ReactElement, useContext } from 'react';
import { Heading, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, CloseButton } from '@chakra-ui/core';
import NavBarItem from './components/NavBarItem';
import { ColorModeContext } from './colorModeContext';

interface IProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const NavDrawer: FC<IProps> = (props: IProps): ReactElement => {
	const { isOpen, onClose } = props;

	const { colorMode } = useContext(ColorModeContext);
	const bgColor = { light: 'grey.100', dark: 'grey.900' };
	const color = { light: 'grey.300', dark: 'grey.200' };

	return (
		<Drawer onClose={onClose} isOpen={isOpen} placement="left">
			<DrawerOverlay />
			<DrawerContent backgroundColor={bgColor[colorMode]} color={color[colorMode]}>
				<CloseButton onClick={onClose} alignContent="right" />
				<DrawerHeader>
					<Heading>mb</Heading>
				</DrawerHeader>

				<DrawerBody alignItems="center">
					<NavBarItem href="#home" text="Home" onClick={onClose} />
					<NavBarItem href="#about" text="About" onClick={onClose} />
					<NavBarItem href="#projects" text="Projects" onClick={onClose} />
					<NavBarItem href="#contact" text="Contact" onClick={onClose} />
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default NavDrawer;
