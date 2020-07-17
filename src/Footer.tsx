import React, { FC, ReactElement, useContext } from 'react';
import { Box, Text } from '@chakra-ui/core';
import { ColorModeContext } from './colorModeContext';

const Footer: FC = (): ReactElement => {
	const currentYear = new Date().getFullYear();

	const { colorMode } = useContext(ColorModeContext);
	const bgColor = { light: 'grey.100', dark: 'grey.700' };
	const color = { light: 'grey.300', dark: 'grey.100' };

	return (
		<Box pb="3" pt="3" backgroundColor={bgColor[colorMode]} color={color[colorMode]}>
			<Text>&copy; 2016-{currentYear}</Text>
		</Box>
	);
};

export default Footer;
