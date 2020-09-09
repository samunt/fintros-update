import * as React from 'react';
import Head from "next/head"
import Blog from '../components/Blog';
import NavBar from '../components/NavBar';
export default function Index() {
  return (
      <>
          <Head>
              <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
              />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta charSet="utf-8" />
          </Head>
          <NavBar title='Fintros Technical'/>
          <Blog title='hello'/>
    </>
  )
}
