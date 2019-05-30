import { fromJS } from 'immutable'; 
import { ASLIDE_FIXED,ARTICLE_LIST } from './actionTypes'

const defaultState = fromJS({
  swiperList: [
    {
      city: 'Vue.js',
      country: 'Vue project',
      img: 'http://static.bgwhite.cn/bg3.jpg',
    },
    {
      city: 'React.js',
      img: 'http://static.bgwhite.cn/bg1.jpg',
    },
    {
      city: 'Node.js',
      img: 'http://static.bgwhite.cn/bg2.jpg',
    }
  ],
  focused: true,
  noticeList: [
    {cont:"React.js+Next.js搭建SSR博客系统",createTime:"03-16"},
    {cont:"React.js+Next.js搭建SSR博客系统",createTime:"03-16"},
    {cont:"React.js+Next.js搭建SSR博客系统",createTime:"03-16"},
    {cont:"React.js+Next.js搭建SSR博客系统",createTime:"03-16"}
  ],
  recentArticlesList: [
    {title:"next+React搭建SSR博客系统"},
    {title:"Nuxt+Vue搭建SSR博客系统"},
    {title:"Linux服务器搭建"},
    {title:"小程序引入多个e-Charts图标"},
  ],
  aslideFixed: false,
  articleList: []
})

// reducer 可以接受state，但是绝不能修改state
export default (state = defaultState,action) => {
  switch(action.type) {
    case ASLIDE_FIXED:
    return state.set('aslideFixed',action.data);
    case ARTICLE_LIST:
    console.log('134',action.data);
    return state.set('articleList',fromJS(action.data));
    // return state.set('articleList',action.data);
    default: 
    return state;
  }
}