import React , { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import $api from '../../api';
import cookie from 'react-cookies'
const isServer = typeof window === 'undefined'
const { JSEncrypt } = isServer ? '' : require('jsencrypt');

class Login extends Component {
  
  constructor() {
    super();
    this.state = {
      account: '',
      password: '',
    }
  }

  // 密码加密
  async encrypt(password) { 
    try {
      const {data: {result}} = await $api.SYSTEM.getPublicKey();
      var encrypt = new JSEncrypt()
      encrypt.setPublicKey(result);
      const encryptPassword = encrypt.encrypt(password);
      return Promise.resolve(encryptPassword);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  // 登录
   handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, {username,password,remember}) => {
      if(err) {
        return false;
      }
      const encryptPassword = await this.encrypt(password);
      try {
        const { data: {result:{token,role}} } = await $api.USER.login({account: username,password:encryptPassword});
        cookie.save('adminToken',token);
        cookie.save('role',role);
        window.history.back();
        return ;
      } catch(err) {
        throw new Error(err);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrap">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" style={{'width': '100%'}} htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <p>
              Or <a href={'/register'}>register now!</a>
            </p>
          </Form.Item>
        </Form>
        <style jsx>{`
          .login-wrap {
            width: 40%;
            height: auto;
            margin: 40px auto;
            border: 1px solid #f0f0f0;
            padding: 20px;
          }
        `}</style>
      </div>
    );
  }

}

export default Form.create({ name: 'normal_login' })(Login);