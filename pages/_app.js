'use client';
import '../styles/globals.css';
import Providers from '../public/providers';

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
