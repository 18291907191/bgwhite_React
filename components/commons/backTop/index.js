import React, { PureComponent } from 'react';

class BackTop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { show: false};
    this.isShow = this.isShow.bind(this);
    this.backTop = this.backTop.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll',this.isShow);
  }

  // 点击图片回到顶部方法，加计时器是为了过渡顺滑
  backTop () {
    let that = this
    let timer = setInterval(() => {
      let ispeed = Math.floor(-that.scrollTop / 5)
      document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
      if (that.scrollTop === 0) {
        clearInterval(timer)
      }
    }, 16)
  }

  // 为了计算距离顶部的高度，当高度大于280显示回顶部图标，小于60则隐藏
  isShow () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    this.scrollTop = scrollTop
    if (this.scrollTop > 280) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }
  render() {
    return (
      <div className={[`backtop ${this.state.show?'show':''}`]} onClick={this.backTop}>
      <i className="iconfont">&#xe606;</i>
      <style jsx>{`
        .backtop {
          position: fixed;
          right: 50px;
          bottom: 30px;
          transition: .5s;
          transform: transLateY(100px);
          padding: 0px 10px ;
          background-color: #45BCF9;
          color: #ffffff;
          cursor: pointer;
        }
        .backtop i {
          font-size: 30px;
        }
        .show {
          transform: transLateY(-150px);
        }
      `}</style>
      </div>
    )
  }
}

export default BackTop;

