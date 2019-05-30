import React , { PureComponent } from 'react';
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js'
import marked from 'marked';
import '../assets/styles/yeh-md-theme.css'
import '../assets/styles/ocean.min.css'
import Axios from 'axios';
import { getRequest } from '../utils/http';

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
// console.log(marked("# if you do what you can do ,you will never more than you are now!"));
class Detail extends PureComponent {
  static async getInitialProps(router) {
    const articleDetail = await getArticleDetail(router.query);
    return { articleDetail }
  }
  // constructor(props) {
  //   super(props);
  //   const { id } = props.router.query;
  //   this.state = {
  //     articleId: id,
  //     docContent:props.articleDetail.content
  //   }
  // }
  render() {
    const {articleDetail:{content,title,title_image,describe,reader_number,good_number,create_time,tag_id}} = this.props;
    console.log('40',content,title);
    return (
      <div className="mark">
        <h3>{title}</h3>
        <div>{describe}</div>
        <p>阅读量：{reader_number} 点赞量：{good_number} 创建时间：{create_time}</p>
        <div className="md" dangerouslySetInnerHTML = {{__html: marked(content)}}></div>
        <style jsx>{`
          .mark {
            width: 100%;
            height: 100%；
            box-sizing: border-box;
            padding: 20px;
          }
        `}</style>
      </div>
    )
  };
}

const getArticleDetail = async(data) => {
  try {
    const {data:{result}} = await getRequest('http://localhost:3002/article/api/v1/article_detail',data);
    console.log('62',result);
    return result;
  } catch(err) {
    return err.message;
  }
}

export default Detail;