  // import PropTypes from 'prop-types'
import Swiper         from '../../commons/swiper';
import ArticleList    from './articleList';
import AslideNotice   from './aslideNotice';
import RecentArticles from './recentArticles';

const HomeUI = ({swiperList,articleList,aslideFixed,noticeList,recentArticlesList}) => (
  <div className="container">
    <div className="article">
      <div className="swiper">
        <Swiper slides={swiperList} />
      </div> 
      <h3 className="hd">最新发布</h3>
      <ArticleList articleList={articleList}/>
    </div>
    <div className={[`aslide ${aslideFixed?'fixed':''}`]}>
      <AslideNotice noticeList={noticeList} />
      <RecentArticles recentArticlesList={recentArticlesList} />
    </div>
    <style jsx>{`
      .container {
        box-sizing: border-box;
        padding: 20px 100px 0;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }
      .article {
        width: 65%;
      }
      .swiper {
        width: 100%;
        height: 160px;
      }
      .aslide {
        width: 30%;
      }
      .aslide.fixed {
        position: fixed;
        right: 5%;
        top: 10px;
      }
      .article .hd {
        line-height: 45px;
      }
    `}</style>
  </div>
)

// HomeUI.propTypes = {
//   swiperList: PropTypes.array,
//   articleList: PropTypes.object,
//   noticeList: PropTypes.object,
//   recentArticlesList: PropTypes.object
// }
// HomeUI.defaultProps = {
//   swiperList: [],
//   articleList: [],
//   noticeList: [],
//   recentArticlesList: []
// }

export default HomeUI;