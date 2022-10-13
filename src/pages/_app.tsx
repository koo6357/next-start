import React, { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';

import { wrapper } from '@/modules/store';
import { SEO } from '../../next-seo.config';
import { ThemeProvider } from '@/styles/ThemeProvider';
import Layout from '@/components/layout/Layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <DefaultSeo {...SEO} />
        {getLayout(<Component {...props} />)}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
