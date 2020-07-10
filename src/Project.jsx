import React from 'react';
import { Card, Typography, Grid, Link, CardContent, CardActions, Button, CardMedia } from '@material-ui/core';

const Project = ({ name, details, link, image }) => {
	console.log(process.env.PUBLIC_URL + image);
	return (
		<Grid item>
			<Card>
				<CardContent>
					<Link href={link} target="_blank">
						<Typography variant="h4">{name}</Typography>
					</Link>
					<img src={image} />
					<CardMedia src={process.env.PUBLIC_URL + image} />
					{/* <Typography variant="h4">Description</Typography> */}
					<CardActions>
						<Button>View</Button>
					</CardActions>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Project;
