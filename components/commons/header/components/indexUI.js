import Logo from './logo';
import Menu from './menu';
import MarQuee from './marquee';

const HeaderUI = () => (
  <header>
    <Logo />
    <MarQuee />
    <Menu />
    <style jsx>{`
      header {
        padding: 20px 20px;
        background: url('http://static.bgwhite.cn/react-website/timg.jpeg') no-repeat center;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </header>
)

export default HeaderUI;