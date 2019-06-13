import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import PropTypes from 'prop-types'

const HomeUI = dynamic({
  modules: () => {
    const components = {
      BackTop: import('../../commons/backTop'),
      Swiper: import('../../commons/swiper'),
      AslideNotice: import('./aslideNotice'),
      RecentArticles: import('./recentArticles'),
      ArticleList: import('./articleList'),
    }
    return components;
  },
  render: (
    {swiperList,articleList,aslideFixed,noticeList,recentArticlesList},
    {Swiper,ArticleList,AslideNotice,RecentArticles,BackTop}) => 
    <Fragment>
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
          <BackTop />
        </div>
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
          width: 860px;
        }
        .swiper {
          width: 100%;
          height: 160px;
        }
        .aslide {
          width: 360px;
        }
        .aslide.fixed {
          position: fixed;
          right: 100px;
          top: 10px;
        }
        .article .hd {
          line-height: 45px;
        }
      `}</style>
    </Fragment>
})

HomeUI.propTypes = {
  swiperList: PropTypes.array,
  articleList: PropTypes.object,
  noticeList: PropTypes.object,
  recentArticlesList: PropTypes.object
}
HomeUI.defaultProps = {
  swiperList: [],
  articleList: [],
  noticeList: [],
  recentArticlesList: []
}

export default HomeUI;