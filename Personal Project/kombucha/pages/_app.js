import '@styles/globals.css';
import '@styles/helpers.css';

import Layout from '@components/Layout';

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;