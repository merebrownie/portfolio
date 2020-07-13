import React, { FC, ReactElement } from 'react';
import { MenuItem, Text, Link } from '@chakra-ui/core';

interface IProps {
	href: string;
	text: string;
}

const NavBarItem: FC<IProps> = (props: IProps): ReactElement => {
	const { href, text } = props;

	return (
		<Link href={href} color="grey.150">
			<Text display="block" fontSize="3xl" fontFamily="mono" mt="0" mb="0" mr={6}>
				{text}
			</Text>
		</Link>
	);
};

export default NavBarItem;
