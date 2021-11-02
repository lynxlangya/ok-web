import { Provider } from 'react-redux'
import type { AppProps /* AppContext */ } from 'next/app';
import '@/styles/globals.less';
import 'antd/dist/antd.less';
import store from '@/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
