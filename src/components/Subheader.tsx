import React, { FC, ReactElement, ElementType } from 'react';
import { Heading, HeadingProps, BoxProps } from '@chakra-ui/core';

interface IProps {
	as?: ElementType;
	text: string;
	size?: HeadingProps['size'];
	fontFamily?: BoxProps['fontFamily'];
	fontSize?: BoxProps['fontSize'];
	fontWeight?: BoxProps['fontWeight'];
	letterSpacing?: BoxProps['letterSpacing'];
}

const Subheader: FC<IProps> = (props: IProps): ReactElement => {
	const { as, text, size, fontFamily, fontSize, fontWeight, letterSpacing } = props;
	return (
		<Heading
			textTransform="uppercase"
			fontWeight={fontWeight || 'bold'}
			fontFamily={fontFamily || 'body'}
			as={as}
			size={size || '2xl'}
			fontSize={fontSize || '4xl'}
			letterSpacing={letterSpacing || 'normal'}
		>
			{text}
		</Heading>
	);
};

export default Subheader;
