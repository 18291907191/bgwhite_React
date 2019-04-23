import HeaderUI from './components/indexUI';
import { connect } from 'react-redux';
import { Component } from 'react';
import * as actionCreators from './store/actionCreators'

class Header extends Component {
  render() {
    return (
      <HeaderUI />
    )
  }
  componentDidMount() {
    this.props.initNavList(this.props.navList);
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    initNavList(data) {
      sessionStorage.setItem('navList',JSON.stringify(data))
      let navIndex = sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0;
      dispatch(actionCreators.initNavListAction(data));
      dispatch(actionCreators.selectNavItemAction(navIndex));
    },
  }
}

export default connect(null,mapDispathToProps)(Header);

