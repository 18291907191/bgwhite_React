import dynamic from 'next/dynamic';
import { Fragment } from 'react';
const Header = dynamic(import('../components/commons/header'),{
  loading: () => <p>正在加载组件...</p>
});
const Footer = dynamic(import('../components/commons/footer'),{
  loading: () => <p>组件加载中...</p>
})

export default ({ children }) => (
  <Fragment>
    <div>
      <Header />
      { children }
      <style jsx>{`
        div {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
        }
      `}</style>
    </div>
    <Footer />
  </Fragment>
)