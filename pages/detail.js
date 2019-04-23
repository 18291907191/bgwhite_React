import React , { PureComponent } from 'react';

class Detail extends PureComponent {
  constructor(props) {
    super(props);
    const { id } = props.router.query;
    this.state = {
      articleId: id
    }
  }
  render() {
    const { articleId } = this.state;
    return (
      <div>这里是详情页面文章id为{articleId}</div>
    )
  };
}

export default Detail;