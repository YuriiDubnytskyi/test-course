import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
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

const AdminProductMain = (props) => {
    console.log('render+AdminProductMain')
    return (
            <div>
            <Form
            {...layout}
            name="basic"
            onFinish={props.onFinishAddProductMain}
            onFinishFailed={props.onFinishFailedAddProductMain}
            >
                <Form.Item
                    label="ProductTitle"
                    name="productTitle"
                    rules={[
                    {
                        required: true,
                        message: 'Please input ProductTitle!',
                    },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>

                <Form.Item
                    label="IdProductTitle"
                    name="idProductTitle"
                    rules={[
                    {
                        required: true,
                        message: 'Please input ProductTitle!',
                    },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>
                {props.productTitleList.err?<p>{props.productTitleList.errMess}</p>:<></>}
                {props.productTitleList.success?<>
                <p>{props.success()}</p>
                <p>{props.okSuccess()}</p>
                </>:<></>}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={props.productTitleList.loading}>
                        Add Product Title
                    </Button>
                </Form.Item>
            </Form>      
        </div>  
    )
}
AdminProductMain.whyDidYouRender = true
export default AdminProductMain