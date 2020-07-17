import React, { FC, ReactElement, Dispatch, SetStateAction } from 'react';
import { IconButton } from '@chakra-ui/core';
import { FiMoon, FiSun } from 'react-icons/fi';

interface IProps {
	colorMode: 'light' | 'dark';
	setColorMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}

const ToggleColorMode: FC<IProps> = (props: IProps): ReactElement => {
	const { colorMode, setColorMode } = props;

	const icon = colorMode === 'light' ? FiMoon : FiSun;
	const bgColor = { light: 'grey.100', dark: 'grey.700' };
	const color = { light: 'grey.700', dark: 'grey.100' };
	const opposite = colorMode === 'light' ? 'dark' : 'light';

	return (
		<IconButton
			variant="ghost"
			variantColor={color[colorMode]}
			aria-label={`"Turn ${colorMode === 'light' ? 'on' : 'off'} dark mode"`}
			backgroundColor={bgColor[colorMode]}
			size="lg"
			mr="3"
			icon={icon}
			_hover={{ backgroundColor: bgColor[opposite], color: color[opposite] }}
			onClick={() => {
				const newColorMode = colorMode === 'light' ? 'dark' : 'light';
				setColorMode(newColorMode);
				localStorage.setItem('colorMode', newColorMode);
			}}
		/>
	);
};
export default ToggleColorMode;
