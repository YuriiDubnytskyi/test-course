import React from 'react'
import { Form, Input, Button ,Space} from 'antd';

export default function AdminUpdatePanelExistProperties(props) {
	console.log('render+AdminUpdatePanelExistProperties')
    return (
        <div>
            <Form name="dynamic_form_nest_item" autoComplete="off" onFinish={props.onFinishProperty}>
					
					{props.dataProperty.map((field,i) => (
								<Space style={{ display: 'flex', marginBottom: 8 }} align="start">
									<Form.Item
										label="Property"
										name={"property"+i}
								
									>
										<Input defaultValue={field.property} />
									</Form.Item>
									
									<Form.Item
										label="Value"
										name={"value"+i}
								
									>
										<Input defaultValue={field.value} />
									</Form.Item>
									
								</Space>
					))}

					<Form.Item>
						<Button type="primary" htmlType="submit">
						Submit
						</Button>
					</Form.Item>
				</Form>
        </div>
    )
}
