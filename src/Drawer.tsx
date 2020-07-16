import React, { FC, ReactElement } from 'react';
import {
	Heading,
	Drawer as ChakraDrawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	CloseButton,
} from '@chakra-ui/core';
import NavBarItem from './components/NavBarItem';

interface IProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const Drawer: FC<IProps> = (props: IProps): ReactElement => {
	const { isOpen, onClose } = props;

	return (
		<ChakraDrawer onClose={onClose} isOpen={isOpen} placement="left" size="xs">
			<DrawerOverlay />
			<DrawerContent backgroundColor="grey.100">
				<CloseButton onClick={onClose} alignContent="right" />
				<DrawerHeader>
					<Heading color="grey.150">mb</Heading>
				</DrawerHeader>

				<DrawerBody alignItems="center">
					<NavBarItem href="#home" text="Home" onClick={onClose} />
					<NavBarItem href="#about" text="About" onClick={onClose} />
					<NavBarItem href="#projects" text="Projects" onClick={onClose} />
					<NavBarItem href="#contact" text="Contact" onClick={onClose} />
				</DrawerBody>
			</DrawerContent>
		</ChakraDrawer>
	);
};

export default Drawer;
