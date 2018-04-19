import React from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';
import Document, { Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheets = new SheetsRegistry();

    const decoratePage = Page => props => (
      <JssProvider registry={sheets}>
        <Page {...props} />
      </JssProvider>
    );

    const renderedPage = renderPage(decoratePage);

    const styles = (
      <style
        type="text/css"
        data-meta="jss-ssr"
        dangerouslySetInnerHTML={{ __html: sheets.toString() }}
      />
    );

    return { ...renderedPage, styles };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
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
