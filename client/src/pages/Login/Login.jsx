
import { Button, Form, Input , Typography } from 'antd';
import './Login.css';
import {LoginUser} from '../../api/users';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import {message} from 'antd';

const { Title } = Typography;
function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
      try{
        // console.log(values);
        const response = await LoginUser(values);
        console.log(response);
        if(response.success)
        {
          localStorage.setItem('token', response.token);
          window.location.href = '/';
          message.success("user log in");
        } else {
          message.error(response.message);
        }
      } catch(error){
        //  console.log(error);
         message.error(error.message);
      }
     
  }
   
  useEffect(() => {
    if(localStorage.getItem("token"))
    {
     navigate('/');
    }
  },[]);

    return(
        <>
        <main>
           <section className='login-form-container'>
            <div className='login-form'>
                <Title className='title'>Login Form</Title>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  autoComplete="off"
                  onFinish={onFinish}
                >
                <Form.Item
                  label="Username"
                  name="email"
                  htmlFor='email'
                  rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                  <Input 
                   id='email'
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  htmlFor='password'
                  rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                  <Input.Password />
                </Form.Item>

                <Form.Item >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
                </Form>
            </div>
           </section>
        </main>
         
        </>
    )
}

export default Login;