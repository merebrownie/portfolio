import React, { FC, ReactElement, ElementType } from 'react';
import { Heading, HeadingProps, BoxProps } from '@chakra-ui/core';

interface IProps {
	as?: ElementType;
	text: string;
	size?: HeadingProps['size'];
	fontSize?: BoxProps['fontSize'];
}

const Subheader: FC<IProps> = (props: IProps): ReactElement => {
	const { as, text, size, fontSize } = props;
	return (
		<Heading fontFamily="mono" as={as} size={size} fontSize={fontSize}>
			{text}
		</Heading>
	);
};

export default Subheader;
