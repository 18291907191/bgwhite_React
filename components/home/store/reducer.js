import { fromJS } from 'immutable'; 

const defaultState = fromJS({
  swiperList: [
    {
      city: 'Vue.js',
      country: 'Vue project',
      img: '/static/bg1.jpg',
    },
    {
      city: 'React.js',
      img: '/static/bg2.jpg',
    },
    {
      city: 'Node.js',
      img: '/static/bg3.jpg',
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
  ]
})

// reducer 可以接受state，但是绝不能修改state
export default (state = defaultState,action) => {
  return state;
}