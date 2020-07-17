import React, { ReactElement, FC, useContext } from 'react';
import { Box, BoxProps } from '@chakra-ui/core';
import { ColorModeContext } from '../colorModeContext';

interface IProps {
	id: string;
	children: any;
	backgroundColor?: BoxProps['backgroundColor'];
	height?: BoxProps['height'];
}

const Section: FC<IProps> = (props: IProps): ReactElement => {
	const { id, children, backgroundColor, height } = props;

	const { colorMode } = useContext(ColorModeContext);
	const bgColor = { light: backgroundColor || 'lavender.100', dark: 'grey.900' };
	const color = { light: 'black', dark: 'grey.200' };
	return (
		<Box
			as="section"
			display="flex"
			flexDir="column"
			id={id}
			backgroundColor={bgColor[colorMode]}
			color={color[colorMode]}
			height={height || undefined}
			minHeight="100vh"
			pr="3"
			pl="3"
			alignItems="center"
			justifyContent="center"
		>
			{children}
		</Box>
	);
};

export default Section;
