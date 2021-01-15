import React from 'react'
import { Form, Input, Button } from 'antd';
import './AdminNews'
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

const AdminNews = (props) => {
    console.log('render+AdminNews')
    return (
        <div className='admin_news_container'>
            <Form className='admin_news_form'
            {...layout}
            name="basic"
            onFinish={props.onFinishNews}
            onFinishFailed={props.onFinishFailedNews}
            >
                <Form.Item className='admin_news_item'
                    label="Title"
                    name="title"
                    rules={[
                    {
                        required: true,
                        message: 'Please input Title!',
                    },
                    ]}
                >
                    <Input allowClear />
                </Form.Item>

                <Form.Item className='admin_news_item'
                    label="Description"
                    name="description"
                    rules={[
                    {
                        required: true,
                        message: 'Please input Description!',
                    },
                    ]}
                >
                    <TextArea allowClear />
                </Form.Item>
                {props.news.errAdd?<p>{props.news.errMessAdd}</p>:<></>}
                {props.news.success?<>
                <p>{props.success()}</p>
                <p>{props.okSuccess()}</p>
                </>:<></>}
                <Form.Item {...tailLayout} className='admin_news_item'>
                    <Button type="primary" htmlType="submit" loading={props.news.loadingAdd}>
                        Add News
                    </Button>
                </Form.Item>
            </Form>      
        </div>  
    )
}
AdminNews.whyDidYouRender = true
export default AdminNews