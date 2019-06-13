import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import HomeUI from './components/indexUI';
import { Spin } from 'antd';
import * as actionCreators from './store/actionCreators'
import { getRequest } from '../../utils/http';

class Home extends PureComponent {
  static async getInitialProps() {
    const articleList = await getArticleList();
    return { articleList }
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {
    const { swiperList,noticeList,recentArticlesList,aslideIsFixed,articleList} = this.props;
    return (
      <Spin spinning={this.state.loading}>
        <HomeUI
          swiperList={swiperList}
          noticeList={noticeList}
          recentArticlesList={recentArticlesList}
          aslideFixed={aslideIsFixed}
          articleList={articleList}
        />
      </Spin>
    )
  }

  toggle(value){
    this.setState({
      loading: value
    })
  }

  componentDidMount() {
    window.addEventListener('scroll',this.props.aslideFixed);
    this.toggle(false);
  }
}

const getArticleList = async() => {
  try {
    const {data:{ result }} = await getRequest('http://localhost:3002/article/api/v1/article_list');
    return result;
  } catch(err) {
    return err.message;
  }
}

const mapStateToProps = (state) => {
  return {
    swiperList: state.home.get('swiperList').toJS(),
    noticeList: state.home.get('noticeList'),
    recentArticlesList: state.home.get('recentArticlesList'),
    aslideIsFixed: state.home.get('aslideFixed'),
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
