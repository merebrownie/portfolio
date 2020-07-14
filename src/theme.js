import { theme } from '@chakra-ui/core';

// First, create an alias for breakpoints
const breakpoints = ['30em', '48em', '62em', '80em'];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

// example theme.js
export default {
	...theme,
	...breakpoints,
	fonts: {
		heading: '"Bromello", sans-serif',
		body: '"Century Gothic", Verdana, sans-serif',
		mono: '"Cabana", monospace',
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '4rem',
	},
	colors: {
		...theme.colors,
		black: '#333',
		grey: {
			'50': '#f8f8f8',
			'100': '#eee',
			'150': '#777',
		},
		lavender: '#f0eaef',
	},
};
