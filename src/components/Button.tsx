import React, { FC, ReactElement, useContext } from 'react';
import { Link, Button as ChakraButton, ButtonProps } from '@chakra-ui/core';
import { ColorModeContext } from '../colorModeContext';

interface IProps {
	href?: string;
	text: string;
	type?: ButtonProps['type'];
	onClick?: () => void;
	isLoading?: boolean;
}

const Button: FC<IProps> = (props: IProps): ReactElement => {
	const { href, text, type, onClick, isLoading } = props;
	const { colorMode } = useContext(ColorModeContext);
	const bgColor = { light: 'grey.100', dark: 'grey.700' };
	const color = { light: 'grey.700', dark: 'grey.100' };
	const opposite = colorMode === 'light' ? 'dark' : 'light';

	return href ? (
		<Link href={href} color="black" textDecor="none">
			<ChakraButton
				type={type || 'button'}
				textDecor="none"
				variant="outline"
				backgroundColor={bgColor[colorMode]}
				color={color[colorMode]}
				onClick={onClick || undefined}
				_hover={{ backgroundColor: bgColor[opposite], color: color[opposite] }}
				isLoading={isLoading || false}
				borderRadius={20}
				mt={'2em'}
			>
				{text}
			</ChakraButton>
		</Link>
	) : (
		<ChakraButton
			type={type || 'button'}
			textDecor="none"
			variant="outline"
			backgroundColor={bgColor[colorMode]}
			color={color[colorMode]}
			onClick={onClick || undefined}
			_hover={{ backgroundColor: bgColor[opposite], color: color[opposite] }}
			isLoading={isLoading || false}
			borderRadius={5}
			mt={'2em'}
		>
			{text}
		</ChakraButton>
	);
};

export default Button;
