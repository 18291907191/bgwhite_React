import React , { Component } from 'react';
import { Spin,Button,message } from 'antd';
import hljs from 'highlight.js'
import marked from 'marked';
import $api from '../../api';
import cookie from 'react-cookies';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

class Detail extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      isHandleGood: false,
    }
    this.handleGood = this.handleGood.bind(this);
    this.handleReward = this.handleReward.bind(this);
  }

  render() {
    const {articleDetail:{content,title,reader_number,good_number,create_time}} = this.props;
    const { isHandleGood } = this.state;
    return (
      <div className="mark-wrap">
        <Spin spinning={this.state.loading}>
        <div className="mark">
          <h1>{title}</h1>
          <div className="md" dangerouslySetInnerHTML = {{__html: marked(content)}}></div>
          <ul className="meta">
            <li>阅读量：(<span>{reader_number}</span>)</li>
            <li>创建时间：(<span>{create_time}</span>)</li>
          </ul>
          <ul className="opt-btn">
            <li onClick={() => this.handleGood(isHandleGood)}>
              {
                isHandleGood ? <i className="iconfont">&#xe9b8;取消</i> : <i className="iconfont">&#xe610;点赞</i>
              }
            </li>
            <li onClick={this.handleReward}><i className="iconfont">&#xef56;打赏</i></li>
          </ul>
          <ul className="tip">
            <h2>网易云热评</h2>
            <li>
              <p id='wycontent'></p>
              <p id='wyname'></p>
            </li>
            <li>【{title}】未经同意不得转载！转载请联系狗尾草</li>
          </ul>
          <style jsx>{`
            .mark-wrap {
              width: 100%;
            }
            .mark {
              width: 80%;
              margin: 0 auto;
              box-sizing: border-box;
              padding: 20px;
            }
            .mark h1 {
              text-align: center;
              font-weight: bold;
              font-size: 18px;
              margin: 10px 0;
            }
            .mark .meta {
              padding: 10px 0;
              display: flex;
              justify-content: flex-end;
              font-size: 14px;
              color: #7f8fa4;
              margin: 20px 0;
            }
            .meta li {
              margin-right: 20px;
              align-self: flex-end;
            }
            .meta li span {
              color: #3576e0;
            }
            .mark .opt-btn {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 20px 0;
            }
            .opt-btn li {
              margin: 0 10px;
              display: inline-block;
              opacity: .8;
              line-height: 1;
              padding: 12px 20px;
              border-radius: 2px;
              color: #fff;
              font-size: 14px;
              background-color: #45B6F7;
              margin: 0 7px;
              cursor: pointer;
            }
            .opt-btn li:hover {
              opacity: 1;
            }
            .opt-btn li:last-child {
              background-color: #F7B10D;
            }
            .tip {
              background-color: #3576e0;
              color: #ffffff;
              opacity: .9;
              box-sizing: border-box;
              padding: 20px;
            }
            .tip:hover {
              opacity: 1;
            }
            .tip h2 {
              font-size: 14px;
              font-weight: 600;
              margin: 24px 0 12px 0;
              color: #ffffff;
            }
            .tip li {
              font-size: 12px;
              line-height: 30px;
            }
          `}</style>
        </div>
        </Spin>
      </div>
    )
  };

  componentWillMount() {
    this.setState({
      loading: false
    })
  }

  // 点赞/取消
  handleGood(isHandleGood) {
    if(cookie.load('role') == 1) {
      message.warning('给自己点赞，忒无耻！！！')
      return ;
    }
    if(cookie.load('adminToken')) {
      this.setState({
        isHandleGood: !isHandleGood
      })
    } else {
      this.props.router.push({pathname:'/login'});
    }
  }

  // 打赏
  handleReward() {
    console.log('159');
  }

  //创建script节点
  createScript() {
    const wyyrp = document.createElement('script');
    wyyrp.type = "text/javascript";
    wyyrp.src = "https://api.4gml.com/NeteaseMusic?type=bq";
    wyyrp.async = true;
    wyyrp.defer = true;
    document.body.appendChild(wyyrp);
  }

  setArticleReaderNum() {
    const { router:{query:{id}} } = this.props;
    $api.ARTICLE.setArticleReaderNum({id});
  }

  componentDidMount() {
    this.setArticleReaderNum();
    if(document == 'undefined') {
      return ;
    }
    this.createScript();
  } 

}

Detail.getInitialProps = async ({query}) => {
  const {data:{result}} = await  $api.ARTICLE.getArticleDetail(query);
  const articleDetail = result;
  return { articleDetail }
}

export default Detail;