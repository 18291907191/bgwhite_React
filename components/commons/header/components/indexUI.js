import dynamic from 'next/dynamic';

const HeaderUI = dynamic({
  modules: () => {
    const components = {
      Logo: import('./logo'),
      Menu: import('./menu'),
      MarQuee: import('./marquee')
    }
    return components
  },
  render: (props,{Logo,Menu,MarQuee}) => 
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
})

export default HeaderUI;