import { fromJS } from 'immutable'; 
import { ASLIDE_FIXED } from './actionTypes'

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
  ],
  aslideFixed: false,
  articleList: [
    {
      imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
      tag: 'Node.js',
      title: '程序员高效率开发',
      createTime: '2019-03-15',
      readNumber: '25',
      commentNumber: '0',
      praise: '999',
      desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
    },
    {
      imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
      tag: 'Node.js',
      title: '程序员高效率开发',
      createTime: '2019-03-15',
      readNumber: '25',
      commentNumber: '0',
      praise: '999',
      desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
    },
    {
      imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
      tag: 'Node.js',
      title: '程序员高效率开发',
      createTime: '2019-03-15',
      readNumber: '25',
      commentNumber: '0',
      praise: '999',
      desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
    },
    {
      imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
      tag: 'Node.js',
      title: '程序员高效率开发',
      createTime: '2019-03-15',
      readNumber: '25',
      commentNumber: '0',
      praise: '999',
      desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
    },
    {
      imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
      tag: 'Node.js',
      title: '程序员高效率开发',
      createTime: '2019-03-15',
      readNumber: '25',
      commentNumber: '0',
      praise: '999',
      desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
    },
    {
      imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
      tag: 'Node.js',
      title: '程序员高效率开发',
      createTime: '2019-03-15',
      readNumber: '25',
      commentNumber: '0',
      praise: '999',
      desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
    },
    {
      imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
      tag: 'Node.js',
      title: '程序员高效率开发',
      createTime: '2019-03-15',
      readNumber: '25',
      commentNumber: '0',
      praise: '999',
      desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
    },
    {
      imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
      tag: 'Node.js',
      title: '程序员高效率开发',
      createTime: '2019-03-15',
      readNumber: '25',
      commentNumber: '0',
      praise: '999',
      desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
    },
    {
      imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
      tag: 'Node.js',
      title: '程序员高效率开发',
      createTime: '2019-03-15',
      readNumber: '25',
      commentNumber: '0',
      praise: '999',
      desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
    }
  ]
})

// reducer 可以接受state，但是绝不能修改state
export default (state = defaultState,action) => {
  switch(action.type) {
    case ASLIDE_FIXED:
    return state.set('aslideFixed',action.data);
    default: 
    return state;
  }
}