import App, {Container} from 'next/app'
import Head from 'next/head';
import React, { Fragment } from 'react'
import { RouterTitle } from '../constans/ConstTypes';
import { Provider } from 'react-redux';
import store from '../store';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps,router} = this.props
    return (
      <Fragment>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <title>{RouterTitle[router.pathname]}</title>
          <link rel='shortcut icon' href='/static/favicon.ico' type='image/ico'/>
        </Head>
        <Provider store={store}>
          <Container>
            <Component {...pageProps} router={router} />
          </Container>
        </Provider>
        <style jsx global>{`
          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed, 
          figure, figcaption, footer, header, hgroup, 
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          /* HTML5 display-role reset for older browsers */
          html,body,#root {
            height: 100%;
            overflow: hidden;
          }
          a {
            text-decoration: none;
          }
          article, aside, details, figcaption, figure, 
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          body {
            line-height: 1;
            color: #333333;
          }
          ol, ul {
            list-style: none;
          }
          blockquote, q {
            quotes: none;
          }
          blockquote:before, blockquote:after,
          q:before, q:after {
            content: '';
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          #__next {
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow: hiden;
          }
          @font-face {
            font-family: 'iconfont';  /* project id 1112247 */
            src: url('//at.alicdn.com/t/font_1112247_h7ke7ck9qaf.eot');
            src: url('//at.alicdn.com/t/font_1112247_h7ke7ck9qaf.eot?#iefix') format('embedded-opentype'),
            url('//at.alicdn.com/t/font_1112247_h7ke7ck9qaf.woff2') format('woff2'),
            url('//at.alicdn.com/t/font_1112247_h7ke7ck9qaf.woff') format('woff'),
            url('//at.alicdn.com/t/font_1112247_h7ke7ck9qaf.ttf') format('truetype'),
            url('//at.alicdn.com/t/font_1112247_h7ke7ck9qaf.svg#iconfont') format('svg');
          }
          .iconfont {
            font-family: "iconfont" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
      </Fragment>
    )
  }
}