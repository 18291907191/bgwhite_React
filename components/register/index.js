import React, { Component } from 'react';
import $api from '../../api';

import {
  Form,
  Input,
  Button,
  AutoComplete,
  message,
  Spin,
} from 'antd';

const AutoCompleteOption = AutoComplete.Option;

class Register extends Component {
  
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      loading: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      values = Object.assign(values,{ device: '2' });
      delete values.rePassword;
      if(err) {
        throw new Error(err);
      }
      this.setState({
        loading: true
      })
      $api.USER.register(values).then(({data}) => {
        if(data.code == 500) {
          message.warning(data.message);
          return ;
        } else if(data.code == 200) {
          this.setState({
            loading: false
          },() => {
            message.success('注册成功!');
            window.history.back();
          })
        }
      })
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  // 再次输入密码的校验
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  // 输入密码的第一次校验
  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  // 网站校验
  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.cn', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Spin spinning={this.state.loading}>
        <div className="register-wrapper">
          <Form 
            {...formItemLayout} 
            className="register-panel" 
            onSubmit={this.handleSubmit}>
            <Form.Item label="Account">
              {getFieldDecorator('account', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your account!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator('rePassword', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Website">
              {getFieldDecorator('website', {})(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                  placeholder="website">
                  <Input />
                </AutoComplete>
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
          <style jsx>{`
            padding-top: 50px;
          `}</style>
        </div>
      </Spin>  
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(Register);

export default WrappedRegistrationForm;