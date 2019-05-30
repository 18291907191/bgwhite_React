import Link from 'next/link';
import React, { PureComponent } from 'react';
import { getRequest } from '../../../utils/http.js';
import { Pagination } from 'antd';

class ArticleList extends PureComponent {
  constructor(props) {
    super(props);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageErrored = this.handleImageErrored.bind(this);
    this.handleChangePagination = this.handleChangePagination.bind(this);
    this.loadMore = this.loadMore.bind(this);
    let articleList = props.articleList;
    this.state = {
      articleList: articleList,
      isHidden: true
    }
  }
  handleChangePagination(page,pageSize) {
    getRequest('http://localhost:3002/article/api/v1/article_list',{page:page,size:pageSize})
    .then(res => {
      if(res.data.code == 200) {
        let result = res.data.result;
        this.setState({
          articleList: result
        },() => {
          console.log(this.state.articleList);
        })
      } else {
        console.log(res.data.message);
      }
    },err => {
      console.log(err);
    })
  }
  render() {
    const { articleList:{articleData,total},isHidden } = this.state;
    let pagination;

    try {
      if(total >= 10) {
        this.setState({
          isHidden: false
        })
        pagination = (
          <li className={articleData.length == 1?'bot':''}>
            <Pagination hideOnSinglePage={isHidden} defaultPageSize={10} defaultCurrent={1} total={total} onChange={this.handleChangePagination} />
          </li>
        )
      }
    } catch(err) {
      console.error('54',err.message);
      pagination = (
        <li style={{color:'red'}}>获取文章总数失败</li>
      )  
    }

    try {
      return (
        <div className="article-wrap">
          <ul>
            {
              articleData.map((item,index) => (
                <li key={+new Date() + index} className={total == 1?'bot':''}>
                  <i className="iconfont recent">&#xe673;</i>
                  <Link href={`/detail/?id=${item.id}`}>
                    <a  className="img-hd">
                      <img
                        src="http://static.bgwhite.cn/article_head_default.jpg"/>
                    </a> 
                  </Link>
                  <div className="cont">
                    <header>
                      <Link href={`/detail?id=${item.id}`}>
                        <a className="tag" >{item.tag}</a>
                      </Link>
                      <Link href={`/detail?id=${item.id}`}>
                        <a className="tit" >{item.title}</a>
                      </Link>
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
    } catch(err) {
      console.error('201',err.message);
      return (
        <div className="article-wrap" style={{color:'red'}}>获取文章列表失败</div>
      )
    }

  }
  loadMore() {
    console.log("分页插件");
  }
  handleImageLoaded(res) {
    console.log('154',res);
    this.setState({imageStatus:'loaded'})
  }
  handleImageErrored(res) {
    console.log('158',res);
    this.setState({imageStatus:'failed to load'})
  }
}

export default ArticleList;