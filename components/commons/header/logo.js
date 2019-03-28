import Link from 'next/link'

const Logo = () => {
  return (
    <div>
    <Link href='/'>
      <img 
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532412479772&di=054181aa27a78980933091e0fd338d3f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201409%2F21%2F20140921125932_2mAvm.thumb.700_0.jpeg"
        alt=""
        title="狗尾草的前端博客" 
      />
    </Link>
    <h3>狗尾草的前端博客</h3>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
      }
      img {
        width: 90px;
        height: 90px;
        border-radius: 100%;
        margin-right: 20px;
      }
    `}</style>
  </div>
  )
}

export default Logo;