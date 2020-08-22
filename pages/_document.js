import Document, { Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from 'next-simple-google-analytics';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <html lang="en">
        <Head>
            <GoogleAnalytics id={process.env.GA_ID} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}