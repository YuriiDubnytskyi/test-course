import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import { Card,Button,PageHeader ,Skeleton } from 'antd';
import {Link,useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {fetchGetProductsBucket,addPlusProductBucket,addMinusProductBucket} from './../../store/actions/actionBucket'
import CardDefault from './../../Components/CardDefault/CardDefault'
import BucketEmpty from './../../Components/BucketEmpty/BucketEmpty'
import './Bucket.css'

const Bucket = (props) => {
    console.log('render+Bucket')
    const productsBucket = useSelector(state => state.productBucket)
	const userBucket = useSelector(state => state.user.user.bucketProducts)
	const history = useHistory()
	const dispatch = useDispatch()
	useEffect(()=>{
        if(userBucket.length !== 0){
            dispatch(fetchGetProductsBucket(userBucket))
        }
	},[])

    return (
        <div style={{'width':'100%'}}>
            {userBucket.length === 0?<>
                <PageHeader
					className="site-page-header"
					onBack={() => history.push('/')}
					title="Title"
					subTitle="This is a subtitle"
				/>
                <BucketEmpty/>
                </>:
            
                productsBucket.productsBucket.length === 0?
                    <div className='products_bucket_container'>
                        <CardDefault loading={productsBucket.loading}/>
                        <CardDefault loading={productsBucket.loading}/>
                        <CardDefault loading={productsBucket.loading}/>
                    </div>
                :
                    <div className='bucket__list bucket-list'>
                        <h2 className='bucket-list__title'>Список ваших товарів</h2>
                        <div className='bucet-list__container'>
                            {productsBucket.productsBucket.map((el,i)=>{return (
                                <div className='bucket-list__item item-bucket'>
                                    <div className='item-bucket__info'>
                                        <h3 className='item-bucket__title'>Найменування товару -- {el.name}</h3>
                                        <p className='item-bucket__price'>Ціна -- {el.price}</p>
                                    </div>
                                    <div className='item-bucket__btn'>
                                        <button className='btn-bucket' onClick={()=>dispatch(addPlusProductBucket(el.idProduct))}>+</button>
                                        <button className='btn-bucket'>{el.count}</button>
                                        <button className='btn-bucket' onClick={()=>dispatch(addMinusProductBucket(el.idProduct))}>-</button>
                                        <button className='btn-bucket'><Link to={`/product/:${el.idProduct}`}>More</Link></button>
                                    </div>    
                                </div>
                                
                                // <Card
                                // style={{ width: 300 }}
                                // actions={[
                                //     <Button size='default' onClick={()=>dispatch(addPlusProductBucket(el.idProduct))}>+</Button>,
                                //     <Button size='default' >{el.count}</Button>,
                                //     <Button size='default' onClick={()=>dispatch(addMinusProductBucket(el.idProduct))}>-</Button>,
                                //     <Button size='default'><Link to={`/product/:${el.idProduct}`}>More</Link></Button>,
                                //     ]}
                                // >
                                //         <Card.Meta
                                //         title={el.name}
                                //         description={el.price}
                                //         />
                                    
                                // </Card>
                                
                                )
                            })}
                        </div>
                        <div className='total__container'>
                            <div className='bucket-list__total'>Загальна ціна становить -- {productsBucket.totalPrice}</div>
                            <button className='bucket-list__buy-btn'  onClick={() => history.push('/buyproduct')}>Купити</button>
                        </div>
                    </div>
            }
        </div>
    )
}

Bucket.whyDidYouRender = true
export default Bucket