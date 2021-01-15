import React from 'react'
import { Form, Button,Input } from 'antd';
const { TextArea } = Input;

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


export default function AdminUpdatePanelProductInfo(props) {
	console.log('render+AdminUpdatePanelProductInfo')
    return (
        <div>
            <Form 
				{...layout}
				name="basic"
				onFinish={props.onFinishItem}
				>
					<Form.Item
						label="Name of Product"
						name="name"
					
					>
						<Input allowClear defaultValue={props.dataItem.productDetail.name}/>
					</Form.Item>

					<Form.Item
						label="Price"
						name="price"
					
					>
						<Input allowClear  defaultValue={props.dataItem.productDetail.price}/>
					</Form.Item>
					<Form.Item
						label="Producer"
						name="producer"
				
					>
						<Input allowClear  defaultValue={props.dataItem.productDetail.producer}/>
					</Form.Item>
					<Form.Item
						label="Info"
						name="info"
				
					>
						<TextArea allowClear  defaultValue={props.dataItem.productDetail.info}/>
					</Form.Item>
				
					{props.dataFull.errUpdate?<p>{props.dataFull.errMessUpdate}</p>:<></>}
					{props.dataFull.successUpdate?<>
					<p>{props.success()}</p>
					<p>{props.okSuccessUpdate()}</p>
					</>:<></>}
					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit" loading={props.dataFull.loadingUpdate}>
						Update Product
						</Button>
					</Form.Item>
			</Form>
        </div>
    )
}
