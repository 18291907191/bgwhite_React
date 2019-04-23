import dynamic from 'next/dynamic';
import { Fragment} from 'react';

const HomeUI = dynamic({
  modules: () => {
    const components = {
      BackTop: import('../../commons/backTop'),
      Swiper: import('../../commons/swiper'),
      AslideNotice: import('./aslideNotice'),
      RecentArticles: import('./recentArticles'),
      MusicPlay: import('./musicPlay'),
      ArticleList: import('./articleList')
    }
    return components;
  },
  render: (
    {swiperList,articleList,aslideFixed,noticeList,recentArticlesList},
    {BackTop,Swiper,AslideNotice,RecentArticles,MusicPlay,ArticleList}) => 
    <Fragment>
      <div className="container">
        <div className="article">
          <div className="swiper">
            <Swiper slides={swiperList} />
          </div> 
          <h3 className="hd">最新发布</h3>
          <ArticleList articleList={articleList} />
        </div>
        <div className={[`aslide ${aslideFixed?'fixed':''}`]}>
          <AslideNotice noticeList={noticeList} />
          <RecentArticles recentArticlesList={recentArticlesList} />
          <MusicPlay />
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

export default HomeUI;