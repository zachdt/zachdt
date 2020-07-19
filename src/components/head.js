
import Head from 'next/head'

export default ({ title='zachary thielemann', description='doing my best' }) =>
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <title>{title}'s webpage</title>
    <meta name="author" content="zachary thielemann" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://wookiehangover.com/static/img/john-wayne.jpg" />
    <meta property="og:description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap"/>
  </Head>