import { createContext } from 'react';

export const ColorModeContext = createContext<{ colorMode: 'light' | 'dark' }>({
	colorMode: 'light', // default value
});
