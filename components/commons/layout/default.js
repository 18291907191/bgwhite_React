import { Fragment,Component } from 'react';
import "antd/dist/antd.css";
import 'highlight.js/styles/github.css';
import '../../../assets/styles/yeh-md-theme.css'
import '../../../assets/styles/ocean.min.css'
import Header from '../header';
import { BackTop } from 'antd';
import Footer from '../footer';

class Layout extends Component {
  
  constructor(props) {
    super(props);
  }

   render() {
    const { children } = this.props;
     return (
        <Fragment>

        <Header />
        
        { children }
    
        <BackTop>
          <div className="backtop">
          <i className="iconfont">&#xe606;</i>
          <style jsx>{`
            .backtop {
              padding: 0px 10px ;
              background-color: #45BCF9;
              color: #ffffff;
              opacity: .8;
              text-align: center;
            }
            .backtop:hover {
              opacity: 1;
            }
            .backtop i {
              font-size: 20px;
            }
          `}</style>
          </div>
        </BackTop>

        <Footer />
    
      </Fragment>
     )
   }

}

export default Layout;