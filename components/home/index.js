import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import HomeUI from './indexUI';

class Home extends PureComponent {
  render() {
    return (
      <HomeUI 
        swiperList={this.props.swiperList}
        noticeList={this.props.noticeList}
        recentArticlesList={this.props.recentArticlesList}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    swiperList: state.home.get('swiperList').toJS(),
    noticeList: state.home.get('noticeList').toJS(),
    recentArticlesList: state.home.get('recentArticlesList').toJS()
  }
}

const mapDispathToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Home);
