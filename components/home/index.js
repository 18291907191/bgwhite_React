import { connect } from 'react-redux';
import React, { Component } from 'react';
import HomeUI from './components/indexUI';
import $api from '../../api';
import { aslideFixed } from './store/actionCreators'
import { Spin } from 'antd';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      loading: true
    }
  }

  render() {
    const { swiperList,noticeList,recentArticlesList,aslideIsFixed,article} = this.props;
    return (
      <Spin spinning={this.state.loading}>
        <HomeUI
          swiperList={swiperList}
          noticeList={noticeList}
          recentArticlesList={recentArticlesList}
          aslideFixed={aslideIsFixed}
          articleList={article}
        />
      </Spin>
    )
  }
  
  componentWillMount() {
    this.setState({
      loading: false
    })
  }

  componentDidMount() {
    window.addEventListener('scroll',this.props.aslideFixed);
  }

}

Home.getInitialProps = async () => {
  const article = await getArticleList();
  return { article }
}

const getArticleList = async() => {
  try {
    const {data:{ result }} = await $api.ARTICLE.getArticleList({status: 1});
    return result;
  } catch(err) {
    return err.message;
  }
}

const mapStateToProps = (state) => {
  return {
    swiperList: state.home.swiperList,
    noticeList: state.home.noticeList,
    recentArticlesList: state.home.recentArticlesList,
    aslideIsFixed: state.home.aslideFixed,
    articleList: state.home.articleList,
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    aslideFixed () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 130) {
        dispatch(aslideFixed(true));
      } else {
        dispatch(aslideFixed(false));
      }
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Home);
