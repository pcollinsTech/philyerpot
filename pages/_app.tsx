/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../layout';

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
