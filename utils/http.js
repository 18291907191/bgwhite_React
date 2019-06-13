import Axios from 'axios';


export const postJsonRequest = (url, params) => {
  return Axios({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const postRequest = (url, params) => {
  return Axios({
    method: 'post',
    url: url,
    // path: url.replace(base.Microservice, ''),
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export const postHTMLRequest = (url, params) => {
  return Axios({
    method: 'post',
    dataType: "html",
    url: url,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      console.log(ret)
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export const getRequest = (url, data = {}) => {
  return Axios({
    method: 'get',
    params: data,
    // path: url.replace(base.Microservice, ''),
    url: url,
  });
}