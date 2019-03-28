import Link from 'next/link';

const articleData = [
  {
    imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
    tag: 'Node.js',
    title: '程序员高效率开发',
    createTime: '2019-03-15',
    readNumber: '25',
    commentNumber: '0',
    praise: '999',
    desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
  },
  {
    imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
    tag: 'Vue.js',
    title: '双向绑定，Observer,Watcher,Dep',
    createTime: '2019-03-15',
    readNumber: '25',
    commentNumber: '0',
    praise: '999',
    desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
  }  
]

const ArticleList = (props) => (
  <div className="article-wrap">
    <ul>
      {
        articleData.map((item,index) => (
          <li key={+new Date() + index}>
            <i className="iconfont recent">&#xe673;</i>
            <a href="/" className="img-hd">
              <img src={item.imgHd} />
            </a>
            <div className="cont">
              <header>
                <a className="tag" href="/">{item.tag}</a>
                <a className="tit" href="/">{item.title}</a>
              </header>
              <p className="meta">
                <span>{item.createTime}</span>
                <span>阅读({item.readNumber})</span>
                <span>评论({item.commentNumber})</span> 
                <span>赞({item.praise})</span> 
              </p>
              <p className="desc">{item.desc}</p>
            </div>
          </li>
        ))
      }
      
    </ul>
    <style jsx>{`
      .article-wrap ul li{
        border: 1px solid #eaeaea;
        padding: 20px;
        overflow: hidden;
        display: flex;
        backface-visibility: hidden;
        transition: .5s;
        position: relative;
      }
      .article-wrap ul li:hover {
        box-shadow: 0 0 10px #f0f0f0;
      }
      .article-wrap ul li {
        border-bottom: 0;
      }
      .article-wrap ul li .recent {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 38px;
        color: #45BCF9;
      }
      .article-wrap ul li:hover {
        background-color: #f6f6f6;
      }
      .article-wrap ul li .img-hd {
        width: 220px;
        height: 150px;
        margin-right: 10px;
      }
      .article-wrap .cont {
        box-sizing: border-box;
        width: 100%;
      }
      .cont header .tag {
        color: #fff;
        background-color: #45BCF9;
        padding: 3px 6px;
        font-size: 12px;
        display: inline-block;
        position: relative;
        margin-right: 6px;
        transition: color 0.25s, background-color 0.25s;
      }
      header .tag:hover {
        opacity: .85;
      }
      .header .tag:after {
        content: '';
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: -4px;
        display: inline-block;
        width: 0;
        height: 0;
        vertical-align: middle;
        border-left: 4px solid #45BCF9;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
      }
      header .tit {
        display: inline-block;
        color: #333333;
      }
      header .tit:hover {
        color: #45BCF9;
      }
      .cont .meta {
        font-size: 12px;
        color: #999999;
        margin: 16px 0;
      }
      .meta span {
        margin-right: 14px;
      }
      .meta span:last-child {
        float: right;
      }
      .desc {
        font-size: 12px;
        color: #999;
        word-wrap: break-word;
        line-height: 20px;
        margin-bottom: 0;
      }
    `}</style>
  </div>
)

export default ArticleList;