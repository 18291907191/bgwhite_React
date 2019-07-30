import Link from 'next/link'

const Logo = () => {
  return (
    <div className="logo">
    <Link href='/'>
      <img 
        src="http://static.bgwhite.cn/react-website/gwc_hd.jpeg"
        alt="狗尾草的前端博客"
        title="狗尾草的前端博客" 
      />
    </Link>
    <h3>狗尾草的前端博客</h3>
    <style jsx>{`
      .logo {
        display: flex;
        align-items: center;
      }
      .logo img {
        width: 90px;
        height: 90px;
        border-radius: 100%;
        margin-right: 20px;
        cursor: pointer;
      }
    `}</style>
  </div>
  )
}

export default Logo;