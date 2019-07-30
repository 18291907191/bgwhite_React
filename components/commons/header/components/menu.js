import { connect } from 'react-redux';
import Link from 'next/link'
import * as actionCreators from '../store/actionCreators'

const Menu = ({ navList,focused,handleNav }) => (
  <nav>
    {
      navList.map((item,index) => (
        <Link key={+new Date() + index} href={item.url}>
          <a 
            target={item.name=='GitHub' || item.name=='Manage'?'_blank':''}
            className={focused==index?'focused':''}
            onClick={() => (handleNav(index))}
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
        box-sizing: border-box;
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
        color: #ffffff;
      }
      .focused::before {
        border-bottom: 0;
      }
      .focused::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-bottom: 2px solid #45BCF9;
        transition: .2s all linear;
      }
    `}</style>
  </nav>
)

const mapStateToProps = (state) => {
  return {
    navList: state.header.navList,
    focused: state.header.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleNav(index) {
      if(index== 3 || index == 4) {
        return ;
      }
      sessionStorage.setItem('navIndex',index);
      dispatch(actionCreators.selectNavItemAction(index));
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Menu);