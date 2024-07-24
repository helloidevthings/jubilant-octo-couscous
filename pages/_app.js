'use client';
// import Providers from '../public/Providers';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
