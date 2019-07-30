import React , { Component } from 'react';
import { Spin } from 'antd';
import hljs from 'highlight.js'
import marked from 'marked';
import $api from '../../api';
import BackTop from '../commons/backTop/index';

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
      loading: true
    }
  }

  render() {
    const {articleDetail:{content,title,reader_number,good_number,create_time}} = this.props;
    return (
      <div className="mark-wrap">
        <Spin spinning={this.state.loading}>
        <div className="mark">
          <h1>{title}</h1>
          <div className="md" dangerouslySetInnerHTML = {{__html: marked(content)}}></div>
          <ul className="meta">
            <li>阅读量：(<span>{reader_number}</span>)</li>
            <li>点赞量：(<span>{good_number}</span>)</li>
            <li>创建时间：(<span>{create_time}</span>)</li>
          </ul>
          <ul className="tip">
            <h2>网易云热评</h2>
            <li>
              <p id='wycontent'></p>
              <p id='wyname'></p>
            </li>
            <li>如果觉得有帮助，请点个赞哦~</li>
          </ul>
          <BackTop />
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
            .tip {
              background-color: #3576e0;
              color: #ffffff;
              background-color: rgba(65,105,225,.4);
              box-sizing: border-box;
              padding: 20px;
            }
            .tip h2 {
              font-size: 1.2em;
              font-weight: 600;
              margin: 24px 0 12px 0;
              color: #ffffff;
            }
            .tip li {
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

  componentDidMount() {
    createScript();
    const { router:{query:{id}} } = this.props;
    $api.ARTICLE.setArticleReaderNum({id})
    .then(res => {
      console.log('119',res);
    })
  } 

}

Detail.getInitialProps = async ({query}) => {
  const {data:{result}} = await  $api.ARTICLE.getArticleDetail(query);
  const articleDetail = result;
  return { articleDetail }
}

//创建script节点
const createScript = () => {
  const wyyrp = document.createElement('script');
  wyyrp.type = "text/javascript";
  wyyrp.src = "https://api.4gml.com/NeteaseMusic?type=bq";
  wyyrp.async = true;
  wyyrp.defer = true;
  document.body.appendChild(wyyrp);
}

// const getArticleDetail = async(params) => {
//   try {
//     const {data:{result}} = await $api.ARTICLE.getArticleDetail(params);
//     return result;
//   } catch(err) {
//     throw new Error(err);
//   }
// }

export default Detail;