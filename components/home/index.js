import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import HomeUI from './components/indexUI';
import * as actionCreators from './store/actionCreators'
import Axios from 'axios';

class Home extends PureComponent {
  // static async getInitialProps() {
  //   const navList = Axios.get('http://localhost:3002/nav_list')
  //   .then(res => {
  //     console.log('11',res.data.result);
  //     return { navList: res.data.result }
  //   },err => {
  //     new Error(err);
  //   })
  //   return navList;
  // }
  render() {
    const { swiperList,noticeList,recentArticlesList,aslideIsFixed,articleList } = this.props;
    return (
      <HomeUI
        swiperList={swiperList}
        noticeList={noticeList}
        recentArticlesList={recentArticlesList}
        aslideFixed={aslideIsFixed}
        articleList={articleList}
      />
    )
  }
  componentDidMount() {
    window.addEventListener('scroll',this.props.aslideFixed);
  }
}

const mapStateToProps = (state) => {
  return {
    swiperList: state.home.get('swiperList').toJS(),
    noticeList: state.home.get('noticeList'),
    recentArticlesList: state.home.get('recentArticlesList'),
    aslideIsFixed: state.home.get('aslideFixed'),
    articleList: state.home.get('articleList')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    aslideFixed () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 130) {
        dispatch(actionCreators.aslideFixed(true));
      } else {
        dispatch(actionCreators.aslideFixed(false));
      }
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Home);
