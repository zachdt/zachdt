
import Head from 'next/head'

export default ({ title='zachary thielemann', description='nothing works' }) =>
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <title>{title}</title>
    <meta name="author" content="zachary thielemann" />
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap&family=Monofett&display=swap" rel="stylesheet" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174176625-1"></script>
    <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-174176625-1');
              `
            }}
          />
  </Head>