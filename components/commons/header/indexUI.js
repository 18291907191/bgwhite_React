import dynamic from 'next/dynamic';

const Logo = dynamic(import('./logo'),{
  loading: () => <p>Logo加载中...</p>
})
const Menu = dynamic(import('./menu'),{
  loading: () => <p>菜单加载中...</p>
})
const MarQuee = dynamic(import('./marquee'),{
  loading: () => <p>经典名句加载中...</p>
})

const HeaderUI = (props) => (
  <header>
    <Logo />
    <MarQuee />
    <Menu />
    <style jsx>{`
      header {
        padding: 20px 20px;
        background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552887564432&di=934760de81d9f22a78df1267f428faec&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110715%2F7943290_155206295348_2.jpg') no-repeat center;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </header>
)

export default HeaderUI;