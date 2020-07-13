import React, { FC, ReactElement } from 'react';
import { Link, Button as ChakraButton } from '@chakra-ui/core';

interface IProps {
	href: string;
	text: string;
}

const Button: FC<IProps> = (props: IProps): ReactElement => {
	const { href, text } = props;
	return (
		<Link href={href} cursor="" color="black" textDecor="none">
			<ChakraButton textDecor="none" variant="outline" backgroundColor="grey.50">
				{text}
			</ChakraButton>
		</Link>
	);
};

export default Button;
