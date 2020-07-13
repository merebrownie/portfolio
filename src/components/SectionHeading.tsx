import React, { FC, ReactElement, ElementType } from 'react';
import { Link, Heading, HeadingProps, BoxProps } from '@chakra-ui/core';

interface IProps {
	as?: ElementType;
	text: string;
	size?: HeadingProps['size'];
	fontSize?: BoxProps['fontSize'];
}

const SectionHeading: FC<IProps> = (props: IProps): ReactElement => {
	const { as, text, size, fontSize } = props;
	return (
		<Heading as="h2" size="xl" fontSize="5xl">
			{text}
		</Heading>
	);
};

export default SectionHeading;
