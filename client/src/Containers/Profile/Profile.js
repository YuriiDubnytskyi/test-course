import React from 'react'
import { Form, Button,Card } from 'antd';
import {fetchGetCountSell} from './../../store/actions/actionCountSell'
import {Link,useHistory,useParams} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux' 

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

export default function Profile(props) {
  console.log('render+Profile')
    const userCountSell = useSelector(state => state.userCountSell)
    const email = useSelector(state => state.user.user.email)
    const dispatch = useDispatch()
    const onFinishGetCountSell = (values) => {
        console.log('Success:', values);
        dispatch(fetchGetCountSell(email))
    }


    const onFinishGetCountSellFail = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <div>
              Your email -- {email}
            </div>
            <Form
            {...layout}
            name="basic"
            onFinish={onFinishGetCountSell}
            onFinishFailed={onFinishGetCountSellFail}
            >
                {userCountSell.err?<p>{userCountSell.errMess}</p>:<></>}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={userCountSell.loading}>
                        Get Full Data
                    </Button>
					
                </Form.Item>
            </Form>
            <div>
				{userCountSell.dataSell.length === 0 ?
					<p>Ви ще нічого не купували</p>
				:<></>
				}
			</div>
            <div>
              {userCountSell.dataSell.map((el)=>{
                return (
                  <Card style={{ width: 300 }}
                  >
                    <Card.Meta
                      title={'Покупка'}           
                    ></Card.Meta>
                    {el.time}
                    {el.product.map((el)=>{return (
                      <>
                        Name  -- {el.name}
                        <br/>
                        Count -- {el.count}
                        <br/>
                        Price * count ---{el.price*el.count}
                        <br/>
                        More read on <Link to={`/product/:${el.idProduct}`}>More</Link>
                      </>
                    )})}
                    
                  </Card>
                )
              })}
			</div>
        </div>
    )
}
