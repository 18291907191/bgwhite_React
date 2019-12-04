import { SELECT_NAV_ITEM } from './actionTypes';

const defaultState = {
  navList: [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Project', url: '/project' },
    { id: 4, name: 'GitHub', url: 'https://github.com/' },
    { id: 5, name: 'Manage', url: 'http://manage.bgwhite.cn' },
    { id: 6, name: 'EasyBook', url: 'https://www.jianshu.com/u/69941f570736' }
  ],
  focused: 0,
  goodSentences: [
    "没有人因为水的平淡而厌倦水，所以我们也不要因为生活的平淡而摒弃生活!",
    "If you do, what you can do, you will never more than you are now!",
    "海到无边天做岸，山登绝顶人为峰！",
    "如果你浪费了自己的年龄，那是挺可悲的。因为你的青春只能持续一点儿时间。",
    "良好的健康状况和高度的身体训练，是有效的脑力劳动的重要条件。",
    "真正的大师永远都怀着一颗学徒的心 ——易",
    "你的努力不是为了给谁看，而是让人生有更多的选择",
    "敢想，敢说，敢做是我们成功的首要前提",
    "利器完不成的工作，钝器常能派上用场",
    "睡眠和休息丧失了时间，却取得了明天工作的精力"
  ]
}

export default (state = defaultState,action) => {
  switch(action.type) {
    case SELECT_NAV_ITEM:
    return  Object.assign({}, state, {focused: action.data});
    default: 
    return state;
  }
}