import React, { FC, ReactElement } from 'react';
import { Link, Heading } from '@chakra-ui/core';

interface IProps {
	href: string;
	text: string;
	onClick?: () => void;
}

const NavBarItem: FC<IProps> = (props: IProps): ReactElement => {
	const { href, text, onClick } = props;

	return (
		<Link href={href} color="grey.150" ml="5" transition="height 20000ms ease-in" onClick={onClick}>
			<Heading as="h2" fontSize="3xl" fontFamily="mono" mt="0" mb="0">
				{text}
			</Heading>
		</Link>
	);
};

export default NavBarItem;
