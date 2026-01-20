import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      themes={['dark', 'light', 'pink']}
      enableSystem={false}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
