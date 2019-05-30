import { fromJS } from 'immutable';
import { INIT_NAV_LIST,SELECT_NAV_ITEM } from './actionTypes';

const defaultState = fromJS({
  navList: [
    {id:1,name:'Home',url:'/'},
    {id:2,name:'About',url:'/about'},
    {id:3,name:'Project',url:'/project'},
    {id:4,name:'GitHub',url:'https://github.com/'},
    {id:5,name:'Manage',url:'/manage'}
  ],
  focused: 0,
  goodSentences: "没有人因为水的平淡而厌倦水，所以我们也不要因为生活的平淡而摒弃生活!",
})

export default (state = defaultState,action) => {
  switch(action.type) {
    // case INIT_NAV_LIST:
    // return state.set('navList',action.data);
    case SELECT_NAV_ITEM:
    return state.set('focused',action.data);
    default: 
    return state;
  }
}