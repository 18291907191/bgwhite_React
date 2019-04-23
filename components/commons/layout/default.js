import dynamic from 'next/dynamic';
import { Fragment,Component } from 'react';

const Header = dynamic(import('../header'),{
  loading: () => <p>正在加载组件...</p>
});

const Footer = dynamic(import('../footer'),{
  loading: () => <p>组件加载中...</p>
})

class Layout extends Component {
  constructor(props) {
    super(props);
  }
   render() {
    const { navList,children} = this.props;
     return (
        <Fragment>

        <Header navList={navList} />
        
        { children }
    
        <Footer />
    
      </Fragment>
     )
   }

}

export default Layout;