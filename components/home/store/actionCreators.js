import * as actionTypes from './actionTypes';

export const aslideFixed = (isFixed) => ({
  type: actionTypes.ASLIDE_FIXED,
  data: isFixed
})