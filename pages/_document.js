import Document, { Head, Main, NextScript } from 'next/document';
import NextHead from 'next/head';


export default class Doc extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <NextHead>
          <link rel="manifest" href="/_next/static/manifest.json" />
        </NextHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
