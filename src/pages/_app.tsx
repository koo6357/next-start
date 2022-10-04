import React, { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';

import GlobalStyle from '@/styles/GlobalStyle';
import Layout from '../layout/Layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default App;
