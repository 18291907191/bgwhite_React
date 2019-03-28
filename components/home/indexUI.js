import Layout from '../../layouts/default'
import dynamic from 'next/dynamic';

const Swiper = dynamic(import('../commons/swiper'),{
  loading: () => <p>Loading...</p>
})
const AslideNotice = dynamic(import('./aslideNotice'),{
  loading: () => <p>Loading...</p>
})
const RecentArticles = dynamic(import('./recentArticles'),{
  loading: () => <p>Loading...</p>
})
const MusicPlay = dynamic(import('./musicPlay'),{
  loading: () => <p>Loading...</p>
})
const ArticleList = dynamic(import('./articleList'),{
  loading: () => <p>Loading...</p>
})

const HomeUI = (props) => (
  <Layout>
    <div className="container">
      <div className="article">
        <div className="swiper">
          <Swiper slides={props.swiperList} />
        </div> 
        <h3 className="hd">最新发布</h3>
        <ArticleList />
      </div>
      <div className="aslide">
        <AslideNotice noticeList={props.noticeList} />
        <RecentArticles recentArticlesList={props.recentArticlesList} />
        <MusicPlay />
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
      .article .hd {
        line-height: 45px;
      }
    `}</style>
  </Layout>
)

export default HomeUI;