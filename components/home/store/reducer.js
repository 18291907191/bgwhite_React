import { ASLIDE_FIXED } from './actionTypes'

const defaultState = {
  swiperList: [
    {
      city: 'Vue.js',
      country: 'Vue.js',
      img: 'http://static.bgwhite.cn/react-website/bg3.jpg',
    },
    {
      city: 'React.js',
      country: 'React.js',
      img: 'http://static.bgwhite.cn/react-website/bg1.jpg',
    },
    {
      city: 'Node.js',
      country: 'Node.js',
      img: 'http://static.bgwhite.cn/react-website/bg2.jpg',
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
}

export default (state = defaultState,action) => {
  switch(action.type) {
    case ASLIDE_FIXED:
      return Object.assign({},state,{ aslideFixed : action.data});
    default: 
    return state;
  }
}