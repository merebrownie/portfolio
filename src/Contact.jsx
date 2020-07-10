import React, { Fragment, useState } from 'react';
import { Typography, TextField, Button, Icon } from '@material-ui/core';

const Contact = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	return (
		<section>
			<Typography variant="h2">Contact</Typography>
			<form action="contact_manager/index.php" method="post">
				<input type="hidden" name="action" value="add_contact" />
				<TextField
					id="name"
					label="Name"
					id="contact_name"
					variant="outlined"
					value={name}
					onChange={handleNameChange}
				/>
				<br />
				<TextField
					id="email"
					label="Email"
					id="contact_email"
					variant="outlined"
					value={email}
					onChange={handleEmailChange}
				/>
				<br />
				<TextField
					id="message"
					multiline
					label="Message"
					id="contact_message"
					variant="outlined"
					value={message}
					onChange={handleMessageChange}
				/>
				<br />
				<Button variant="outlined" color="primary" endIcon={<Icon>send</Icon>}>
					Send
				</Button>
			</form>
		</section>
	);
};

export default Contact;
