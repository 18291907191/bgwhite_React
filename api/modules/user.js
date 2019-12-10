import { getRequest,postRequest } from '../../utils/http';
import domain from '../domain';

const USER = {

  // 登录服务
  login(params = {}) {
    return postRequest(`${domain}/user/api/v1/login`, params);
  },
  // 注册
  register(params = {}) {
    return postRequest(`${domain}/user/api/v1/register`, params);
  }
}

export default USER;