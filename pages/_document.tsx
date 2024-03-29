import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { getCssString } from 'styles/stitches.config';

// from: https://github.com/vercel/next.js/tree/master/examples/with-styled-components
export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			const stitchesCss = getCssString();

			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						<style>{stitchesCss}</style>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
