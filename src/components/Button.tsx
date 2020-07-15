import React, { FC, ReactElement } from 'react';
import { Link, Button as ChakraButton, ButtonProps } from '@chakra-ui/core';

interface IProps {
	href?: string;
	text: string;
	type?: ButtonProps['type'];
	onClick?: () => void;
	isLoading?: boolean;
}

const Button: FC<IProps> = (props: IProps): ReactElement => {
	const { href, text, type, onClick, isLoading } = props;
	return href ? (
		<Link href={href} cursor="" color="black" textDecor="none">
			<ChakraButton
				type={type || 'button'}
				textDecor="none"
				variant="outline"
				backgroundColor="grey.50"
				onClick={onClick || undefined}
				isLoading={isLoading || false}
			>
				{text}
			</ChakraButton>
		</Link>
	) : (
		<ChakraButton
			type={type || 'button'}
			textDecor="none"
			variant="outline"
			backgroundColor="grey.50"
			onClick={onClick || undefined}
			isLoading={isLoading || false}
		>
			{text}
		</ChakraButton>
	);
};

export default Button;
