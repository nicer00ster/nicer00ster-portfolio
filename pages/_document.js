import Document, { Head, Main, NextScript } from 'next/document';
import Manifest from 'next-manifest/manifest';
import flush from "styled-jsx/server";


export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks  } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <Manifest
            href='/static/manifest/manifest.json'
            themeColor='#ffc18e'
            initialScale='1'
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
