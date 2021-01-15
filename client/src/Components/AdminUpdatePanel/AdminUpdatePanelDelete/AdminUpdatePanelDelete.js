import React from 'react'
import { Form, Button } from 'antd';
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

export default function AdminUpdatePanelDelete(props) {
  console.log('render+AdminUpdatePanelDelete')
    return (
        <div>
            <Form 
						{...layout}
						name="basic"
						onFinish={props.onFinishDelete}
						>
						{props.dataFull.errUpdate?<p>{props.dataFull.errMessUpdate}</p>:<></>}
						{props.dataFull.successDelete?<>
						<p>{props.success()}</p>
						<p>{props.okSuccessDelete()}</p>
						</>:<></>}
							<Form.Item {...tailLayout}>
								<Button type="primary" htmlType="submit" loading={props.dataFull.loadingDelete}>
								Delete Product
								</Button>
							</Form.Item>
					</Form>
        </div>
    )
}
