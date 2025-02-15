
import React from 'react'
import { Button, Form, Input, notification } from 'antd';
import "./register.scss"
import logo from "../../assest/signin.gif"
import {Link, useNavigate} from "react-router-dom";
import { createUserApi } from '../../utils/api';
const Register = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const {email, name, password} = values;
    const result = await createUserApi(email, name, password);
    if(result){
      notification.success({
        message:"Đăng ký",
        description:"Đăng ký thành công "
      })
      navigate("/login");
    }
      else{
        notification.error({
          message:"Đăng nhập",
          description:"Đăng nhập thất bại "
        })
      }
    };
  return (
    <>
        <div className='Register'>
          <div className='Register__image'>
            <img src={logo} alt='logo'/>
          </div>
          <div>
        <Form
        
    name="basic"
    onFinish={onFinish}
    layout='vertical'
  >
    <Form.Item
      label="Tên người dùng"
      name="name"
      rules={[
        {
          required: true,
          message: 'Làm ơn nhập tên người dùng',
        },
      ]}
    >
      <Input/>
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Làm ơn nhập email',
        },
      ]}
    >
      <Input type='email'/>
    </Form.Item>
      
    <Form.Item
      label="Mật khẩu"
      name="password"
      rules={[
        {
          required: true,
          message: 'Làm ơn nhập mật khẩu',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Nhập lại mật khẩu"
      name="password"
      rules={[
        {
          required: true,
          message: 'Làm ơn nhập mật khẩu',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item label={null} style={{display: 'flex', justifyContent: 'center'}}>
      <Button type="primary" htmlType="submit">
        Đăng ký
      </Button>
    </Form.Item>
    <div className='title'>
      <p>
        Bạn đã có tài khoản ?
      </p>
      <Link to="/login">
      Đăng nhập
      </Link>
  </div>
  </Form>
  
        </div>
      </div>
    </>

  )
}

export default Register