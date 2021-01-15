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

export default function AdminUpdatePanelCount(props) {
  
  console.log('render+AdminUpdatePanelCount')
    return (
        <div>
            <Form 
						{...layout}
						name="basic"
						onFinish={props.onFinishCount}
					>
						<Form.Item
							label="Count of Product"
							name="count"
						>
							<Input allowClear defaultValue={props.dataStorage.storage.count}/>
						</Form.Item>
						<Form.Item {...tailLayout}>
								<Button type="primary" htmlType="submit" >
								Update Count
								</Button>
						</Form.Item>
					</Form>
        </div>
    )
}
