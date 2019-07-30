let domain;
if (process.env.NODE_ENV == "development") {
  domain = 'http://127.0.0.1:3002'
} else if (process.env.NODE_ENV == "production") {
  domain = 'http://www.bgwhite.cn/api';
} 

export default domain;
