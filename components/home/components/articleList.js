import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { getRequest } from '../../../utils/http.js';
import { Pagination } from 'antd';

class ArticleList extends PureComponent {

  constructor(props) {
    super(props);
    this.handleChangePagination = this.handleChangePagination.bind(this);
    let articleList = props.articleList;
    this.state = {
      articleList: articleList,
    }
  }

  async handleChangePagination(page,pageSize) {
    const {data:{code,result}} = await getRequest('http://localhost:3002/article/api/v1/article_list',{page:page,size:pageSize});
    if(code != 200) {
      return false;
    }
    this.setState({
      articleList: result
    })
  }
  
  render() {

    const { articleList:{articleData,total} } = this.state;

    const pagination = (
      <Pagination style={{'margin':'20px 0','float':'right','overflow':'hidden'}} defaultPageSize={10} defaultCurrent={1} total={total} onChange={this.handleChangePagination} />
    )

    return (
      <div className="article-wrap">
        <ul>
          {
            articleData.map((item,index) => (
              <li key={+new Date() + index} className={total == 1?'bot':''}>
                <i className="iconfont recent">&#xe673;</i>
                <a href={`/detail?id=${item.id}`}  className="img-hd">
                  <img
                    alt="狗尾草的前端博客"
                    title={item.title}
                    src={item.title_image?item.title_image:"http://static.bgwhite.cn/title-img-default.jpg"}
                  />
                </a> 
                <div className="cont">
                  <header>
                    <a href={`/detail?id=${item.id}`} className="tag" >{item.tag?item.tag : 'HTML5'}</a>
                    <a href={`/detail?id=${item.id}`} className="tit" >{item.title}</a>
                  </header>
                  <p className="meta">
                    <span>{item.create_time}</span>
                    <span>阅读({item.reader_number})</span>
                    <span>评论({item.comment_number?item.comment_number:0})</span> 
                    <span>赞({item.good_number})</span> 
                  </p>
                  <p className="desc">{item.describe}</p>
                </div>
              </li>
            ))
          }
          {pagination}
        </ul>
        <style jsx>{`
          .article-wrap {
            min-height: 280px;
            _height: 280px;
          }
          .article-wrap ul li,.pagination{
            padding: 20px;
            border: 1px solid #f0f0f0;
            overflow: hidden;
            display: flex;
            backface-visibility: hidden;
            transition: .5s;
            position: relative;
            border-bottom: 0;
          }
          .article-wrap ul li:hover {
            box-shadow: 0 0 10px #f0f0f0;
          }
          .article-wrap ul li.bot {
            border-bottom: 1px solid #f0f0f0;
          }
          .article-wrap ul li .recent {
            position: absolute;
            left: 0;
            top: 0;
            font-size: 38px;
            color: #45BCF9;
          }
          .article-wrap ul li:hover .img-hd img {
            transform: scale(1.02);
          }
          .article-wrap ul li:hover {
            background-color: #f6f6f6;
          }
          .article-wrap ul li .img-hd img {
            width: 100%;
            height: 100%;
            transition: all .5s;
          }
          .article-wrap ul li .img-hd {
            display: inline-block;
            width: 220px;
            height: 150px;
            margin-right: 10px;
          }
          .article-wrap .pagination {
            margin-top: 20px;
          }
          .article-wrap .cont {
            box-sizing: border-box;
            width: 100%;
          }
          .cont header .tag {
            color: #fff;
            background-color: #45BCF9;
            padding: 3px 6px;
            font-size: 12px;
            display: inline-block;
            position: relative;
            margin-right: 6px;
            transition: color 0.25s, background-color 0.25s;
          }
          header .tag:hover {
            opacity: .85;
          }
          .header .tag:after {
            content: '';
            position: absolute;
            top: 50%;
            margin-top: -4px;
            right: -4px;
            display: inline-block;
            width: 0;
            height: 0;
            vertical-align: middle;
            border-left: 4px solid #45BCF9;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
          }
          header .tit {
            display: inline-block;
            color: #333333;
          }
          header .tit:hover {
            color: #45BCF9;
          }
          .cont .meta {
            font-size: 12px;
            color: #999999;
            margin: 16px 0;
          }
          .meta span {
            margin-right: 14px;
          }
          .meta span:last-child {
            float: right;
          }
          .desc {
            font-size: 12px;
            color: #999;
            word-wrap: break-word;
            line-height: 20px;
            margin-bottom: 0;
          }
        `}</style>
    </div>
    )

  }

}

ArticleList.propTypes = {
  articleList: PropTypes.object
}

ArticleList.defaultProps = {
  articleList: []
}

export default ArticleList;