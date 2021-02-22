import { styled } from 'styles/stitches.config';
import { Box } from 'components/box';

const NewBox = styled(Box, {
	color: '$red',
});

const App = () => {
	return (
		<>
			<h2>Stitches Examples</h2>
			<Box as="p" css={{ color: 'blue' }}>
				Styled with <code>css</code> prop, <strong>does not</strong> utilize
				tokens
			</Box>
			<Box as="p" css={{ color: '$red' }}>
				Styled with <code>css</code> prop, <strong>does</strong> utilize a
				token, styles not applied () tokens
			</Box>
			<NewBox as="p">
				Styled with <code>styled</code> factory, <strong>does</strong> utilize a
				token, styles <code>are</code> applied via tokens
			</NewBox>

			<hr />
		</>
	);
};

export default App;
