import { AppProps } from 'next/app';
import '../styles/globals.css'
import "../styles/custom.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
