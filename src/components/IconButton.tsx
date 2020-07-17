import React, { FC, ReactElement, ComponentType } from 'react';
import { IconButton as ChakraIconButton } from '@chakra-ui/core';
import { Icons } from '@chakra-ui/core/dist/theme/icons';

interface IProps {
	icon: Icons | ComponentType;
	label: string;
	outline?: boolean;
}

const IconButton: FC<IProps> = (props): ReactElement => {
	const { icon, label, outline } = props;
	return (
		<ChakraIconButton
			variant={outline ? 'outline' : 'ghost'}
			variantColor="grey.300"
			aria-label={label}
			size="lg"
			icon={icon}
			_hover={{ backgroundColor: 'grey.300', color: 'grey.100' }}
		/>
	);
};

export default IconButton;
