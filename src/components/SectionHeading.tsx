import React, { FC, ReactElement } from 'react';
import { Heading } from '@chakra-ui/core';

interface IProps {
	text: string;
}

const SectionHeading: FC<IProps> = (props: IProps): ReactElement => {
	const { text } = props;
	return (
		<Heading as="h2" size="xl" fontSize="5xl" mb="8">
			{text}
		</Heading>
	);
};

export default SectionHeading;
