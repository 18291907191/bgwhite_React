import HeaderUI from './components/indexUI';
import { connect } from 'react-redux';
import { Component } from 'react';
import * as actionCreators from './store/actionCreators'
import Router from 'next/router';

class Header extends Component {
  render() {
    return (
      <HeaderUI />
    )
  }

  componentDidMount() {
    switch(Router.pathname) {
      case '':
        sessionStorage.setItem('navIndex',0); //页面刷新时，缓存当前路由
      break;
      case '/':
        sessionStorage.setItem('navIndex',0); //页面刷新时，缓存当前路由
      break;
      case '/about':
        sessionStorage.setItem('navIndex',1); //页面刷新时，缓存当前路由
      break;
      default:
        sessionStorage.setItem('navIndex',0); //页面刷新时，缓存当前路由
      break;
    }
    this.props.initNavList();
  }

}

const mapDispathToProps = (dispatch) => {
  return {
    initNavList() {
      let navIndex = sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0;
      dispatch(actionCreators.selectNavItemAction(navIndex));
    },
  }
}


export default connect(null,mapDispathToProps)(Header);

