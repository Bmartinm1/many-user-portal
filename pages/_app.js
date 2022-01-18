import '../styles/globals.css';
import Layout from '../components/layout/Layout';

function ManyUserPortal({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default ManyUserPortal;
