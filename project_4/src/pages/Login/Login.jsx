
import React, { useContext, useState } from 'react'
import { Button, Checkbox, Form, Input, notification } from 'antd';
import "./login.scss"
import logo from "../../assest/signin.gif"
import { loginApi } from '../../utils/api';
import {Link, useNavigate} from "react-router-dom";
import { authContext } from '../../components/context/auth.usecontext';
const Login = () => {
    const navigate = useNavigate();
    const {setAuth} = useContext(authContext);
    const [isLogin, setIsLogin] = useState(false);
    const onFinish = async (values) => {
      const {email, password} = values;
      const result = await loginApi(email, password);
      if(result && result.EC === 0){
        localStorage.setItem("access_token",result.access_token);
        localStorage.setItem("showConfetti", "true");
        setIsLogin(true);
        setTimeout(() => {
          setIsLogin(false);
        }, 5000);
        notification.success({
          message:"Đăng nhập",
          description:"Đăng nhập thành công "
        })
        setAuth({
          isAuthenticated: true,
          user: {
              email: result?.user?.email ?? "",
              name: result?.user?.name ?? "",
          }
        })
        navigate("/");
      }
        else{
          notification.error({
            message:"Đăng nhập",
            description:result?.message ?? 'Đăng nhập thất bại',
          })
        }
      };
  return (
    <>
        <div className='login'>
          <div className='login__image'>
            <img src={logo} alt='logo'/>
          </div>
          <div>
        <Form
        
    name="basic"
    onFinish={onFinish}
    layout='vertical'
  >
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
      <div className='forgetpassword'>
      <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Lưu tài khoản</Checkbox>
    </Form.Item>
    <Form.Item >
      <Link to="/forgetpassword">Quên mật khẩu</Link>
    </Form.Item>
      </div>
    
    <Form.Item label={null} style={{display: 'flex', justifyContent: 'center'}}>
      <Button type="primary" htmlType="submit">
        Đăng nhập
      </Button>
    </Form.Item>
    <div className='register'>
      <p>
        Bạn chưa có tài khoản ?
      </p>
      <Link to="/register">
      Đăng ký tài khoản
      </Link>
  </div>
  </Form>
  
        </div>
      </div>
    </>

  )
}

export default Login