import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html dir="rtl" lang="ar">
        <Head>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <link href="https://fonts.googleapis.com/css?family=Amiri" rel="stylesheet" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
