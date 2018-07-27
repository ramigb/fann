import App, {Container} from 'next/app'
import React from 'react'
import TopMenu from '../parts/TopMenu'

import 'bootstrap-v4-rtl/dist/css/bootstrap.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import '../static/style.css'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <TopMenu />
        <div className="container">
          <Component {...pageProps} />
        </div>
    </Container>
  }
}
