import { global } from 'styles/stitches.config';

export const globalStyles = global({
	'html,body': {
		padding: 0,
		margin: 0,
		fontFamily: '$regular',
	},

	'*': {
		boxSizing: 'border-box',
		margin: 0,
	},
});
