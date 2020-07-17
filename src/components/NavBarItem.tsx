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
			<Heading as="h2" fontSize="3xl" letterSpacing="2" fontFamily="mono" mt="0" mb="0">
				{text}
			</Heading>
		</Link>
	);
};

export default NavBarItem;
