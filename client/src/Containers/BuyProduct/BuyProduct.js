import React,{useState} from 'react'
import { Form, Input, Button } from 'antd';
import {useSelector} from 'react-redux'
import {SuccessBuy} from './../../Components/Modal/Modal'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {clearBucket} from './../../store/actions/actionBucket'
import {clearBucketUser} from './../../store/actions/actionsUser'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
  }
};

const BuyProduct = () => {
  console.log('render+BuyProduct')
    const productsBucket = useSelector(state => state.productBucket)
    const [loading,setLoading] = useState(false)
    const [success,setSuccess] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const onFinish = values => {
        console.log(values);
        setLoading(true)
        axios.post('/api/user/buyProducts',{options:values,products:productsBucket})
        .then( (data) => {
            if(data.data.success){
              dispatch(clearBucket())
              dispatch(clearBucketUser())
              setLoading(false)
              setSuccess(true)
            }
        })
    };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'phone']} label="Phone" rules={[{ required: true}]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'adress']} label="Adress" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'postOffice']} label="NovaPoshta №" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      {success?<p>{SuccessBuy(()=>history.push('/'))}</p>:<></>}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

BuyProduct.whyDidYouRender = true
export default BuyProduct