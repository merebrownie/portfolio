import React, { Fragment, useState, createRef } from 'react';
import {
	Button,
	Heading,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Select,
	Textarea,
	Box,
	Icon,
	useDisclosure,
} from '@chakra-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import Modal from './Modal';
import SectionHeading from './components/SectionHeading';

const Contact = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loading, setLoading] = useState();
	const [error, setError] = useState(true);

	const recaptchaRef = createRef();

	const sendEmail = (e) => {
		setError(false);
		setLoading(true);
		e.preventDefault();

		return emailjs.sendForm('icloud', 'template_KRhM5nMN', e.target, 'user_KQXR5OSjppGBpBtgTf4Mb').then(
			(result) => {
				setLoading(false);
			},
			(error) => {
				setError(true);
				setLoading(false);
			}
		);
	};

	return (
		<Box as="section" id="contact" backgroundColor="grey.100">
			<SectionHeading text="Contact" />
			<Box objectFit="contain" ml="auto" mr="auto" mb="5%" width="100%" textAlign="center" letterSpacing="3">
				<form onSubmit={(e) => sendEmail(e)}>
					<FormControl ml="auto" mr="auto" mb="3%">
						<Input
							type="name"
							id="name"
							name="name"
							isRequired
							aria-describedby="name-helper-text"
							placeholder="Name"
							width="70%"
							ml="auto"
							mr="auto"
						/>
					</FormControl>
					<FormControl ml="auto" mr="auto" mb="3%">
						<Input
							type="email"
							id="email"
							name="email"
							isRequired
							aria-describedby="email-helper-text"
							placeholder="Email"
							width="70%"
							ml="auto"
							mr="auto"
						/>
					</FormControl>
					<FormControl ml="auto" mr="auto" mb="3%">
						<Textarea
							id="message"
							name="message"
							placeholder="Message"
							isRequired
							ml="auto"
							mr="auto"
							width="70%"
						/>
					</FormControl>
					<Box ml="auto" mr="auto" width="304px" mb="3">
						<ReCAPTCHA
							style={{ width: '304px' }}
							ml="auto"
							mr="auto"
							ref={recaptchaRef}
							sitekey="6LcS_7AZAAAAAI-RxystXhg2DbLsZ47Ze58vc8on"
						/>
					</Box>
					<Button type="submit" variant="outline" onClick={onOpen}>
						Send
					</Button>
				</form>
			</Box>

			<Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} error={error} loading={loading} />
		</Box>
	);
};

export default Contact;
