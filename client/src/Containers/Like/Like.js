import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import { Card,Button,PageHeader ,Skeleton } from 'antd';
import {Link,useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {fetchGetProductsLike} from './../../store/actions/actionLike'
import {addBuyProduct} from './../../store/actions/actionsUser'
import CardDefault from './../../Components/CardDefault/CardDefault'
import LikeEmpty from './../../Components/LikeEmpty/LikeEmpty'
import './Like.css'

const Like = () => {
	console.log('render+Like')
    const productsLike = useSelector(state => state.productLike)
	const userLikes = useSelector(state => state.user.user.likeProducts)
	const user = useSelector(state => state.user)
	const history = useHistory()
	const dispatch = useDispatch()
	useEffect(()=>{
        if(userLikes.length !== 0){
            dispatch(fetchGetProductsLike(userLikes))
        }
	},[])

	const addBuy = (id,oldId) =>{
        const newId = oldId
        newId.push(id)
		dispatch(addBuyProduct(newId))
	}

    return (
        <div  style={{'width':'100%'}}>
            {userLikes.length === 0?<>
                <PageHeader
					className="site-page-header"
					onBack={() => history.push('/')}
					title="Title"
					subTitle="This is a subtitle"
				/>
                <LikeEmpty/>
                </>:
            
                productsLike.productsLike.length === 0?
				<div className='products_like_container'>
					<CardDefault loading={productsLike.loading}/>
					<CardDefault loading={productsLike.loading}/>
					<CardDefault loading={productsLike.loading}/>
				</div>
                :
                <div className='like__list like-list'>
                        <h2 className='like-list__title'>Список ваших товарів</h2>
                        <div className='like-list__container'>
							{productsLike.productsLike.map((el,i)=>{return (
								<div className='like-list__item item-like'>
												<div className='item-like__info'>
													<h3 className='item-like__title'>Найменування товару -- {el.name}</h3>
													<p className='item-like__price'>Ціна -- {el.price}</p>
												</div>
												<div className='item-like__btn'>
													<button className='btn-like' onClick={()=>addBuy(el.idProduct,user.user.bucketProducts)}>Buy</button>
													<button className='btn-like'><Link to={`/product/:${el.idProduct}`}>More</Link></button>
												</div>    
								</div>
					// <Card
					// style={{ width: 300 }}
					// actions={[
					// 	<Button size='default' onClick={()=>addBuy(el.idProduct,user.user.bucketProducts)}>Buy</Button>,
					// 	<Button size='default'><Link to={`/product/:${el.idProduct}`}>More</Link></Button>,
					// 	]}
					// >
					// 		<Card.Meta
					// 		title={el.name}
					// 		description={el.price}
					// 		/>
						
					// </Card>)
							)
				
					})}
					</div>
				</div>
				
                
            
            }
        </div>
    )
}

Like.whyDidYouRender = true
export default Like