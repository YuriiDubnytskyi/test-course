import React,{useEffect} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {useHistory} from 'react-router-dom'
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };


const LoginForm = (props) => {
    console.log('render+LoginForm')
    const history = useHistory()
    useEffect(()=>{
        if(props.user.success){
            history.push('/')
        }
    },[props.user])

    return (
        <div className='login-container'>
            <Form className='login-container__form'
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={props.onFinishL}
            onFinishFailed={props.onFinishFailedL}
            >
                <Form.Item className='login-container__form__item'
                    label="Email"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item className='login-container__form__item'
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <div className='login-container__form__fail'>
                    {props.user.err?<p>{props.user.errMess}</p>:<></>}
                </div>
                <Form.Item {...tailLayout} className='login-container__form__item login-container__form__item--btn-submit' >
                    <Button type="primary" htmlType="submit" loading={props.user.loading} className='login-container__form__btn'>
                    Login
                    </Button>
                </Form.Item>
            </Form>      
        </div>      
        )
}
LoginForm.whyDidYouRender = true
export default LoginForm