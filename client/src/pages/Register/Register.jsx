import { Button, Form, Input , Typography } from 'antd';
import './Register.css';
import {RegisterUser} from '../../api/users';


const { Title } = Typography;
function Register() {

    const onFinishRegister = async (values) =>{
        try{
          const response = await RegisterUser(values);
          if(response.success)
          {
            console.log(response);
          } else {
            console.log(response.message);
            
          }
        } catch(error){
            console.log(error);
        }
    }

 
   return(
    <>
        <main>
            <section className="register-container">
                <div className='regiter-form'>
                    <Title className='title'>Register Form</Title>
                    <Form
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinish={onFinishRegister}
                    >
                    <Form.Item
                        label="Name"
                        name="name"
                        >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="cnfpassword"
                        rules={[{ required: true, message: 'Please input your confirm username!' }]}
                        >
                        <Input />
                    </Form.Item>

                    <Form.Item>
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


export default Register;