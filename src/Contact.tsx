import React, { FC, ReactElement, useState, createRef, useContext } from 'react';
import { FormControl, Input, Textarea, Box, useDisclosure } from '@chakra-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import Modal from './Modal';
import SectionHeading from './components/SectionHeading';
import Button from './components/Button';
import Section from './components/Section';
import { ColorModeContext } from './colorModeContext';

const Contact: FC = (): ReactElement => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const recaptchaRef = createRef<ReCAPTCHA>();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(true);

	const { colorMode } = useContext(ColorModeContext);
	const bgColor = { light: 'grey.100', dark: 'grey.700' };
	const color = { light: 'grey.700', dark: 'white' };

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		setError(false);
		setLoading(true);
		e.preventDefault();

		return emailjs.sendForm('icloud', 'template_KRhM5nMN', e.target as any, 'user_KQXR5OSjppGBpBtgTf4Mb').then(
			() => {
				setLoading(false);
			},
			() => {
				setError(true);
				setLoading(false);
			}
		);
	};

	return (
		<Section id="contact">
			<SectionHeading text="Contact" />
			<Box width={{ base: '90%', md: '70%' }} textAlign="center">
				<form onSubmit={(e) => sendEmail(e)}>
					<FormControl mb="3%">
						<Input
							type="name"
							id="name"
							name="name"
							isRequired
							aria-describedby="name-helper-text"
							placeholder="Name"
							width="100%"
							backgroundColor={bgColor[colorMode]}
							color={color[colorMode]}
						/>
					</FormControl>
					<FormControl mb="3%">
						<Input
							type="email"
							id="email"
							name="email"
							isRequired
							aria-describedby="email-helper-text"
							placeholder="Email"
							width="100%"
							backgroundColor={bgColor[colorMode]}
							color={color[colorMode]}
						/>
					</FormControl>
					<FormControl mb="3%">
						<Textarea
							id="message"
							name="message"
							placeholder="Message"
							isRequired
							width="100%"
							backgroundColor={bgColor[colorMode]}
							color={color[colorMode]}
						/>
					</FormControl>
					<Box width="304px" ml="auto" mr="auto" mb="3">
						<ReCAPTCHA ref={recaptchaRef} sitekey="6LcS_7AZAAAAAI-RxystXhg2DbLsZ47Ze58vc8on" />
					</Box>
					<Button text="Send" type="submit" onClick={onOpen} isLoading={loading} />
				</form>
			</Box>

			<Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} error={error} loading={loading} />
		</Section>
	);
};

export default Contact;
