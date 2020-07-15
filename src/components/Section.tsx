import React, { ReactElement, FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/core';

interface IProps {
	id: string;
	children: any;
	backgroundColor?: BoxProps['backgroundColor'];
	height?: BoxProps['height'];
}

const Section: FC<IProps> = (props: IProps): ReactElement => {
	const { id, children, backgroundColor, height } = props;
	return (
		<Box
			as="section"
			id={id}
			backgroundColor={backgroundColor || 'grey.100'}
			height={height || undefined}
			pt="5em"
			pb="5em"
			alignItems="center"
		>
			{children}
		</Box>
	);
};

export default Section;
