import Layout from '../../layouts/default'

const About = () => (
  <Layout>
    <div className="container">
      <article className="main">
        <h1>狗尾草的前端博客</h1>
        <div className="website-info">
          <h2><span>网站信息</span></h2>
          <p>创建时间：<span>2019-03-15</span></p>
          <p>网站类型：<span>IT，互联网</span></p>
          <p>网站技术栈：React+Redux+Next+Node+Nginx+Linux+MySQL</p>
        </div>
        <div className="author-info">
          <h2><span>作者信息</span></h2>
          <p>作者：<span>柴志阳</span></p>
          <p>年龄：永远十八~</p>
          <p>爱好：农码一生，听歌，运动，旅游，游戏</p>
        </div>
        <div className="inner-monologue">
          <span>内心独白</span>
          <ul>
            <li>1.产品总有提不完的需求，测试总有提不完的bug，所以兄嘚，别慌。一件一件来~</li>
            <li>1.产品总有提不完的需求，测试总有提不完的bug，所以兄嘚，别慌。一件一件来~</li>
          </ul>
        </div>
      </article>
      <style jsx>{`
        .container {
          height: 100%;
          box-sizing: border-box;
          padding: 20px 100px 0;
          background-color: #f6f6f6;
        }
        .main {
          height: 100%;
          background-color: #ffffff;
          overflow: hidden;
          background: url('/static/bg.png') no-repeat right top #ffffff;
          box-sizing: border-box;
          padding: 0 20px;
        }
        .main h1 {
          font-size: 20px;
          line-height: 60px;
          text-align: center;
        }
        .website-info h2 span,.author-info h2 span{
          border-bottom: 2px solid #cccccc;
          display: inline-block;
          padding: 10px 10px 10px 0;
        }
        .website-info p,.author-info p {
          line-height: 30px;
          font-size: 14px;
        }
        .website-info p span,.author-info p span {
          color: #666666;
          font-size: 14px;
        }
        .inner-monologue span {
          border-bottom: 2px solid #cccccc;
          display: inline-block;
          padding: 10px 10px 10px 0;
        }
        .inner-monologue ul li {
          line-height: 60px;
        }
      `}</style>
    </div>
  </Layout>
)

export default About;