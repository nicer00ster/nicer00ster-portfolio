import Document, { Head, Main, NextScript } from 'next/document';
import Manifest from 'next-manifest/manifest';


export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <Manifest
            href='/static/manifest/manifest.json'
            themeColor='#ffc18e'
            initialScale='1'
          />
        </Head>
        <body>
          <Main />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <NextScript />
        </body>
      </html>
    );
  }
}
