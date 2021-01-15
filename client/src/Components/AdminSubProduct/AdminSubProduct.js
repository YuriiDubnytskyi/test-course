import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import AdminTreeSelect from '../AdminTreeSelect/AdminTreeSelect';
const { Option } = Select;
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


const AdminSubProduct = (props) => {
    console.log('render+AdminSubProduct')
    return (
        <div>
            <Select defaultValue="Sub Title" style={{ width: 120 }} onChange={props.handleTitleChange}>
                {props.productTitleList.productTitleList.map((el,i)=><Option value={el.idProductTitle}>{el.productTitle}</Option>)}
            </Select>
            <Form
            {...layout}
            name="basic"
            onFinish={props.onFinishAddSubProduct}
            onFinishFailed={props.onFinishFailedAddSubProduct}
            >
                <Form.Item
                    label="ProductSubTitle"
                    name="productSubTitle"
                    rules={[
                    {
                        required: true,
                        message: 'Please input ProductSubTitle!',
                    },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>

                <Form.Item
                    label="IdProductSubTitle"
                    name="idProductSubTitle"
                    rules={[
                    {
                        required: true,
                        message: 'Please input ProductSubTitle!',
                    },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>
                {props.productTitleList.errSub?<p>{props.productTitleList.errMessSub}</p>:<></>}
                {props.productTitleList.successSub?<>
                <p>{props.success()}</p>
                <p>{props.okSuccess()}</p>
                </>:<></>}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={props.productTitleList.loadingSub}>
                    Add Product Sub Title
                    </Button>
                </Form.Item>
            </Form>      
        </div>  
    )
}
AdminSubProduct.whyDidYouRender = true
export default AdminSubProduct