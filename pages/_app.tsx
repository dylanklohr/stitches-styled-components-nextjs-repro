import { useRef } from 'react';
import { AppProps } from 'next/app';
import { globalStyles } from 'styles/global-styles';

export default function MyApp({ Component, pageProps }: AppProps) {
	const hasRenderedRef = useRef(false);

	if (!hasRenderedRef.current) {
		globalStyles.toString();
		hasRenderedRef.current = true;
	}

	return <Component {...pageProps} />;
}
