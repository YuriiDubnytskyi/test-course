import React from 'react'
import { Form, Input, Button } from 'antd';
import './AdminFormProperties'

const { TextArea } = Input;
const layout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 22,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };


const AdminFormProperties = (props) => {
    console.log('render+AdminFormProperties')
    return (
        <div className='admin_form_properties_container'>
            <Form className='admin_form_properties'
            {...layout}
            name="basic"
            onFinish={props.onFinishAddProductInfo}
            onFinishFailed={props.onFinishFailedAddProductInfo}
            >
                <Form.Item className='admin_form_properties-item'
                    label="Name of Product"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input Name!',
                    },
                    ]}
                >
                    <Input allowClear className='admin_form_properties-input' />
                </Form.Item>

                <Form.Item className='admin_form_properties-item'
                    label="Price"
                    name="price"
                    rules={[
                    {
                        required: true,
                        message: 'Please input price!',
                    },
                    ]}
                >
                    <Input allowClear className='admin_form_properties-input'/>
                </Form.Item>
                <Form.Item className='admin_form_properties-item'
                    label="Id Product"
                    name="idProduct"
                    rules={[
                    {
                        required: true,
                        message: 'Please input Id Product!',
                    },
                    ]}
                >
                    <Input allowClear className='admin_form_properties-input'/>
                </Form.Item>
                <Form.Item className='admin_form_properties-item'
                    label="Producer"
                    name="producer"
                    rules={[
                    {
                        required: true,
                        message: 'Please input Producer!',
                    },
                    ]}
                >
                    <Input allowClear className='admin_form_properties-input'/>
                </Form.Item>
                <Form.Item className='admin_form_properties-item'
                    label="Info"
                    name="info"
                    rules={[
                    {
                        required: true,
                        message: 'Please input Info!',
                    },
                    ]}
                >
                    <TextArea allowClear className='admin_form_properties-textarea'/>
                </Form.Item>
                {props.productList.err?<p className='admin_error'>{props.productList.errMess}</p>:<></>}
                {props.productList.success?
                <>
                <p>{props.success()}</p>
                <p>{props.okSuccess()}</p>
                </>
                :<></>}
                <Form.Item {...tailLayout} className='admin_form_properties-item--submit'>
                    <Button type="primary" htmlType="submit" loading={props.productList.loading} className='admin_form_properties_submit'>
                    Add Product
                    </Button>
                </Form.Item>
            </Form>
        </div>   
    )
}
AdminFormProperties.whyDidYouRender = true
export default AdminFormProperties