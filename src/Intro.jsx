import React from 'react';
import { Typography, Button, Link } from '@material-ui/core';

const Intro = () => (
	<section>
		<Typography variant="h1">Meredith Browne Fronk</Typography>
		<Typography variant="h2">Web Development Portfolio</Typography>
		<Button>
			<Link href="#about">Learn More</Link>
		</Button>
	</section>
);

export default Intro;
