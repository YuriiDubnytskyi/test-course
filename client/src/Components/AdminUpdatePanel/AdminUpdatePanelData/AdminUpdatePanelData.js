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

export default function AdminUpdatePanelData(props) {
  console.log('render+AdminUpdatePanelData')
    return (
        <div>
           <Form
            {...layout}
            name="basic"
            onFinish={props.onFinishGetFullData}
            onFinishFailed={props.onFinishGetFullDataFail}
            >
                {props.dataFull.err?<p>{props.dataFull.errMess}</p>:<></>}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={props.dataFull.loading}>
                        Get Full Data
                    </Button>
					
                </Form.Item>
            </Form>  
			<Button type="primary" htmlType="submit" onClick={()=>props.setValueTree(undefined)}>
                Clear
            </Button> 
        </div>
    )
}
