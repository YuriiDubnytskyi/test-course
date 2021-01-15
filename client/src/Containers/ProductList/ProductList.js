import React ,{useEffect, useState}from 'react'
import {useSelector} from 'react-redux'
import { Card,Button,PageHeader ,Skeleton,Pagination } from 'antd';
import {Link,useHistory,useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {fetchGetProductList} from './../../store/actions/actionList'
import {fetchAddLikeProduct,addBuyProduct} from './../../store/actions/actionsUser'
import CardDefault from './../../Components/CardDefault/CardDefault'
import './ProductList.css'

const ProductList = () => {
	console.log('render+ProductList')
	const [page,setPage] = useState(1)
	const products = useSelector(state => state.productList.products.slice(0+ ((page-1)*6),6+ ((page-1)*6)))
	const productsL = useSelector(state => state.productList.products.length)
	const loadingList = useSelector(state => state.productList.loadingList)
	const user = useSelector(state => state.user)
	const history = useHistory()
	const [likeId,setLikeId] = useState()
	let {id} = useParams()
	const dispatch = useDispatch()
	useEffect(()=>{
		setPage(1)
		if(id.slice(1)!=='search'){
			dispatch(fetchGetProductList(id.slice(1)))
		}
		
	},[id])

	const addLike = (id,oldId) =>{
		setLikeId(id)
		const newId = oldId
        newId.push(id)
		dispatch(fetchAddLikeProduct(user.user.id,newId))
	}
	const addBuy = (id,oldId) =>{
        const newId = oldId
        newId.push(id)
		dispatch(addBuyProduct(newId))
	}
    return (
		<>
			<div className='product_container'>
				<PageHeader
					className="site-page-header"
					onBack={() => history.push('/')}
					title="Title"
					subTitle="This is a subtitle"
				/>
				<div className='product__list product-list'>
					<div className='product-list__container'>
					{products.length === 0?<>
						<CardDefault loading={loadingList}/>
						<CardDefault loading={loadingList}/>
						<CardDefault loading={loadingList}/>
					</>
					:products.map((el,i)=>{return (
					<div className='product-list__item'>
						<div className='product-list__info product-list-item'>
							<img className='product-list-item__img' src={el.image} alt="img"/>
							<h3 className='product-list-item__title'>{el.name}</h3>
							<p className='product-list-item__price'>Ціна -- {el.price}</p>
						</div>
						<div className='product-list__btn'>
							{user.user.auth && <button className='btn-product-list'  onClick={()=>addLike(el.idProduct,user.user.likeProducts)} >Like</button>}
						 	<button className='btn-product-list' ><Link to={`/product/:${el.idProduct}`}>Buy</Link></button>
					 		<button  className='btn-product-list' ><Link to={`/product/:${el.idProduct}`}>More</Link></button>
						</div>    
					</div>					
					)
				})}
					</div>
				</div>
				<Pagination current={page} onChange={(pageN)=>setPage(pageN)}  total={`${Math.ceil(productsL/6)}0`}/>
				
			</div>
		</>
        
    )
}
ProductList.whyDidYouRender = true
export default ProductList