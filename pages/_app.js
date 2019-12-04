import App, {Container} from 'next/app'
import Head from 'next/head';
import React, { Fragment } from 'react'
import {withRouter} from 'next/router'
import { RouterTitle } from '../constans/ConstTypes';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store'
import Layout from '../components/commons/layout/default';

class MyApp extends App {

  render () {
    const {Component, pageProps,reduxStore,router} = this.props
    return (
      <Fragment>
        
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <title>{RouterTitle[router.pathname]}</title>
          <link rel='shortcut icon' href='/static/favicon.ico' type='image/ico'/>
        </Head>

        <Container>

          <Provider store={reduxStore}>

            <Layout>

              <Component {...pageProps} router={router} />

            </Layout>

          </Provider>

        </Container>

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
          }
          @font-face {
            font-family: 'iconfont';  /* project id 1112247 */
            src: url('//at.alicdn.com/t/font_1112247_dsk21lo5ii.eot');
            src: url('//at.alicdn.com/t/font_1112247_dsk21lo5ii.eot?#iefix') format('embedded-opentype'),
            url('//at.alicdn.com/t/font_1112247_dsk21lo5ii.woff2') format('woff2'),
            url('//at.alicdn.com/t/font_1112247_dsk21lo5ii.woff') format('woff'),
            url('//at.alicdn.com/t/font_1112247_dsk21lo5ii.ttf') format('truetype'),
            url('//at.alicdn.com/t/font_1112247_dsk21lo5ii.svg#iconfont') format('svg');
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

  componentDidMount() {
    createScript();
  }
  
}

//创建script节点
const createScript = () => {
  const handleLove = document.createElement('script');
  handleLove.type = 'text/javascript';
  handleLove.src = 'http://static.bgwhite.cn/react-website/handleLove.js';
  document.body.appendChild(handleLove);
}

export default withReduxStore(withRouter(MyApp));