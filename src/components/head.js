
import Head from 'next/head'

export default ({ title='zach thielemann', description='problem -> product -> software' }) =>
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <title>{title}</title>
    <meta name="author" content="zach thielemann" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Racing+Sans+One&display=swap" rel="stylesheet" />
  </Head>