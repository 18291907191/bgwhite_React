import Link from 'next/link';

const ArticleList = ({articleList}) => (
  <div className="article-wrap">
    <ul>
      {
        articleList.map((item,index) => (
          <li key={+new Date() + index} className={articleList.toJS().length==1?'bot':''}>
            <i className="iconfont recent">&#xe673;</i>
            <a href="/" className="img-hd">
              <img src={item.get('imgHd')} />
            </a>
            <div className="cont">
              <header>
                <a className="tag" href="/">{item.get('tag')}</a>
                <a className="tit" href="/">{item.get('title')}</a>
              </header>
              <p className="meta">
                <span>{item.get('createTime')}</span>
                <span>阅读({item.get('readNumber')})</span>
                <span>评论({item.get('commentNumber')})</span> 
                <span>赞({item.get('praise')})</span> 
              </p>
              <p className="desc">{item.get('desc')}</p>
            </div>
          </li>
        ))
      }
      
    </ul>
    <style jsx>{`
      .article-wrap {
        min-height: 280px;
        _height: 280px;
      }
      .article-wrap ul li{
        padding: 20px;
        border: 1px solid #f0f0f0;
        overflow: hidden;
        display: flex;
        backface-visibility: hidden;
        transition: .5s;
        position: relative;
        border-bottom: 0;
      }
      .article-wrap ul li:hover {
        box-shadow: 0 0 10px #f0f0f0;
      }
      .article-wrap ul li.bot {
        border-bottom: 1px solid #f0f0f0;
      }
      .article-wrap ul li .recent {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 38px;
        color: #45BCF9;
      }
      .article-wrap ul li:hover .img-hd img {
        transform: scale(1.02);
      }
      .article-wrap ul li:hover {
        background-color: #f6f6f6;
      }
      .article-wrap ul li .img-hd img {
        transition: all .5s;
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

ArticleList.getInitialProps = async() => {
  console.log('articleList');
}

export default ArticleList;