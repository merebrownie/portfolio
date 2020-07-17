import React from 'react';
import {
	Button,
	Modal as ChakraModal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Spinner,
	Text,
	Heading,
} from '@chakra-ui/core';

const Modal = (props: {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	error: boolean;
	loading: boolean;
}) => {
	const { isOpen, onClose, error, loading } = props;

	return (
		<ChakraModal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />

			{loading ? (
				<ModalContent display="flex" justifyContent="center" textAlign="center" pb="5" borderRadius="1%">
					<ModalHeader pb="0">
						<Heading>Loading...</Heading>
					</ModalHeader>
					<ModalBody>
						<Spinner thickness="4px" speed="0.65s" emptyColor="lavender.100" color="grey.300" size="xl" />
						<Text>Please wait</Text>
					</ModalBody>
				</ModalContent>
			) : (
				<ModalContent textAlign="center">
					{error ? (
						<ModalHeader pb="0">
							<Heading>Error</Heading>
						</ModalHeader>
					) : (
						<ModalHeader pb="0">
							<Heading>Thank you</Heading>
						</ModalHeader>
					)}
					<ModalCloseButton border="none" backgroundColor="transparent" />
					<ModalBody>
						{error ? (
							<Text>Sorry, there was an issue sending your message. Please try again.</Text>
						) : (
							<Text>Thank you for contacting me! I'll be in touch!</Text>
						)}
					</ModalBody>
					<ModalFooter>
						<Button mr={3} variant="outline" onClick={onClose} backgroundColor="transparent">
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			)}
		</ChakraModal>
	);
};

export default Modal;
