import type { AppProps /* AppContext */ } from 'next/app';
import '@/styles/globals.less';
import 'antd/dist/antd.less';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
