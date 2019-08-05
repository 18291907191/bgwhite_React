import { getRequest,postRequest } from '../../utils/http';
import domain from '../domain';

export default {

  // 获取公钥
  getPublicKey(params = {}) {
    return getRequest(`${domain}/system/api/v1/public_key`,params);
  }
}