import * as actionTypes from './actionTypes';

export const aslideFixed = (isFixed) => ({
  type: actionTypes.ASLIDE_FIXED,
  data: isFixed
})

export const articleList = (data) => ({
  type: actionTypes.ARTICLE_LIST,
  data: data
})

export const articleDetail = (data) => ({
  type: actionTypes.ARTICLE_DETAIL,
  data: data
})