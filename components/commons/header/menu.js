import { connect } from 'react-redux';
import { PureComponent } from 'react';
import axios from 'axios';
import Link from 'next/link'
import * as actionCreators from './store/actionCreators'

class Menu extends PureComponent {
  render() {
    return (
      <nav>
        {
          this.props.navList.map((item,index) => (
            <Link key={+new Date() + index} href={item.url}>
              <a 
                target={item.name=='GitHub'?'_blank':''}
                className={this.props.focused==index?'focused':''}
                onClick={() => (this.props.handleNav(index))}
              >
                {item.name}
              </a>
            </Link>
          ))
        }
        <style jsx>{`
          a {
            color: #333333;
            text-shadow: 0px 0px 2px #ffffff;
            padding: 10px 10px;
            position: relative;
          }
          a::before {
            content: "";
            position: absolute;
            top: 0;
            left: 100%;
            width: 0;
            height: 100%;
            border-bottom: 2px solid #45BCF9;
            transition: .2s all linear;
          }
          a:hover {
            color: #ffffff;
            text-shadow: 0px 0px 2px #45BCF9;
          }
          a:hover::before {
            width: 100%;
            left: 0;
          }
          a:hover ~ a::before {
            left: 0;
          }
          .focused {
            text-shadow: 0px 0px 2px #45BCF9;
            border-bottom: 2px solid #45BCF9;
            color: #ffffff;
          }
        `}</style>
      </nav>
    )
  }

  componentDidMount() {
    this.props.initNavList();
  }

}

const mapStateToProps = (state) => {
  return {
    navList: state.header.get('navList'),
    focused: state.header.get('focused')
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    initNavList() {
      axios.get('http://localhost:3002/nav_list')
      .then(res => {
        const data = res.data.result;
        dispatch(actionCreators.initNavListAction(data));
      })
    },
    handleNav(index) {
      dispatch(actionCreators.selectNavItemAction(index));
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Menu);