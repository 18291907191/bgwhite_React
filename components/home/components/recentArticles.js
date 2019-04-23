import Link from 'next/link';
/**
 * @description 侧边栏 最近文章
 * @param {*} data
 * @return {Object} Dom 
 */
const RecentArticles = (props) => (
  <div className="aslide-recent-articles">
    <h3 className="hd"><span><i className="iconfont">&#xe610;&nbsp;&nbsp;</i>推荐文章</span></h3>
    <ul className="recent-articles-cont">
      {
        props.recentArticlesList.map((item,index) => {
          return (
            <li key={+new Date() + index}>
              <Link href='/'>
                <a>{item.get('title')}</a>
              </Link>
            </li>
          )
        })
      }                
    </ul>
    <style>{`
      .aslide-recent-articles {
        border: 1px solid #eaeaea;
        min-height: 160px;
        _height: 160px;
        margin-bottom: 10px;
        transition: .5s;
      }
      .aslide-recent-articles:hover {
        box-shadow: 0 0 10px #ccc;
        transform: transLateY(-5px);
      }
      .aslide-recent-articles .hd {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #eaeaea;
        background-color: #fbfbfb;
      }
      .aslide-recent-articles .hd span {
        display: inline-block;
        height: 100%;
        padding: 0 20px 0 10px;
        background-color: #ffffff;
        border-right: 1px solid #eaeaea;
        border-bottom: 1px solid #ffffff;
      }
      .recent-articles-cont li {
        box-sizing: border-box;
        padding: 5px 10px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-item: center;
        line-height: 30px;
        border-bottom: 1px solid #f0f0f0;
      }
      .recent-articles-cont li:last-child {
        border-bottom: 0;
      }
      .recent-articles-cont li a:hover {
        color: #45BCF9;
      }
      .recent-articles-cont li a {
        color: #333333;
        display: block;
        width: 330px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-shadow: 0px 0px 2px #ffffff;
      }
    `}</style>
  </div>    
)

export default RecentArticles;