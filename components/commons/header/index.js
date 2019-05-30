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

