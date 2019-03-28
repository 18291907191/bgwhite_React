import { INIT_NAV_LIST,SELECT_NAV_ITEM } from './actionTypes'

export const initNavListAction = (data) => ({
  type: INIT_NAV_LIST,
  data
})

export const selectNavItemAction = (index) => ({
  type: SELECT_NAV_ITEM,
  data: index
})
