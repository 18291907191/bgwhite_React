import Axios from 'axios';
import { Router } from 'next/router'
import Cookies from 'react-cookies';
import  { message } from 'antd';

// 请求拦截
Axios.interceptors.request.use(config => {
  // showFullScreenLoading();
  if(!Cookies.load('adminToken')) {
    return config;
  }
  const token = Cookies.load('adminToken');
  config.headers['Token'] = token;
  return config;
}, err => {
  // tryHideFullScreenLoading();
  message.error('请求超时');
  return Promise.resolve(err);
})

// // 响应拦截
// Axios.interceptors.response.use(res => {
//   console.log('23',res.data);
//   // tryHideFullScreenLoading();
//   switch (res.data.code) {
//     case 200:
//       return res.data.result;
//     case 400:
//       message.error(res.data.message);
//       return Promise.reject(res.data.message)
//     case 401:
//       message.error(res.data.message);
//       Router.push({path:'/login'});
//       Cookies.remove('adminToken');
//       return Promise.reject(res.data.message);
//     case 201:
//       messsage.error(res.data.message);
//       return res.data.result;
//     case 403:
//       message.error(res.data.message);
//       Cookies.remove('adminToken');
//       Router.push({pathname:'/login'});
//       return Promise.reject(res.data);
//     case 500:
//         message.error('请求出错⊙﹏⊙∥')
//       return Promise.reject(res.data.message);
//     default:
//       return Promise.reject(res);
//   }
// }, err => {
//   console.log('报错信息',err);
//   // tryHideFullScreenLoading();
//   switch (err.response.status) {
//     case 500:
//       message.error('500，服务器出小差了⊙﹏⊙∥')
//       break;
//     case 504:
//       message.error('500，服务器被吃了⊙﹏⊙∥')
//       break;
//     case 404:
//       message.error('404,请求资源未发现⊙﹏⊙∥')
//       break;
//     case 403:
//       message.error('403，权限不足,请联系狗尾草!')
//       break;
//     default:
//       message.error('网络超时')
//   }
//   return Promise.reject(err);
// })

Axios.defaults.timeout = 300000; // 请求超时5fen

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
    url: url,
  });
}