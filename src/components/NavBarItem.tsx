import React, { FC, ReactElement } from 'react';
import { Link, Heading, BoxProps } from '@chakra-ui/core';

interface IProps {
	href: string;
	text: string;
	onClick?: () => void;
	color?: BoxProps['color'];
}

const NavBarItem: FC<IProps> = (props: IProps): ReactElement => {
	const { href, text, onClick, color } = props;

	return (
		<Link href={href} color={color} ml="5" onClick={onClick}>
			<Heading as="h2" size="2xl" fontWeight="normal" fontFamily="mono" mt="0" mb="0" letterSpacing=".05em">
				{text}
			</Heading>
		</Link>
	);
};

export default NavBarItem;
