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
        sessionStorage.setItem('navIndex', 0);
      break;
      case '/':
        sessionStorage.setItem('navIndex', 0);
      break;
      case '/about':
        sessionStorage.setItem('navIndex', 1);
      break;
      case '/project':
        sessionStorage.setItem('navIndex', 2);
      break;
      default:
        sessionStorage.setItem('navIndex', 0);
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

