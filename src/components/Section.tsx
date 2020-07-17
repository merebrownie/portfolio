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
			id={id}
			backgroundColor={bgColor[colorMode]}
			color={color[colorMode]}
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
