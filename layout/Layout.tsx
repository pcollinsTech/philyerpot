import React from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Phil Yer Pot</title>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <div className="bg-gray-100">
        {/* <Nav /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}
