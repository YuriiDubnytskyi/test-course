import React from 'react'
import { Form, Input, Button } from 'antd';

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
const SignUpForm = (props) => {
    console.log('render+SignUpForm')
    return (
        <div>
            <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={props.onFinishS}
            onFinishFailed={props.onFinishFailedS}
            >
                <Form.Item
                    label="Email"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
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

                {props.user.err?<p>{props.user.errMess}</p>:<></>}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={props.user.loading}>
                    Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
SignUpForm.whyDidYouRender = true
export default SignUpForm