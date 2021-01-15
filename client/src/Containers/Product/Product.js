import React,{useEffect} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import { Button,PageHeader ,Skeleton,Carousel,Image ,Row, Col   } from 'antd';
import {fetchGetProductInfo} from './../../store/actions/actionInfo'
import {fetchAddLikeProduct,addBuyProduct} from './../../store/actions/actionsUser'
import {useSelector,useDispatch} from 'react-redux'

const contentStyle = {
    width:'200px'
  }
const Product = () => {
    console.log('render+Product')
    const history = useHistory()
    const productInfo = useSelector(state => state.productInfo)
    const user = useSelector(state => state.user)
    let {id} = useParams()
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(fetchGetProductInfo(id.slice(1)))
    },[id])
    const addLike = (id,oldId) =>{
        const newId = oldId
        newId.push(id)
		dispatch(fetchAddLikeProduct(user.user.id,newId))
    }
    const addBuy = (id,oldId) =>{
        if(productInfo.count==0){
          alert('We dont have this product')
        }else{
          const newId = oldId
        newId.push(id)
		dispatch(addBuyProduct(newId))
        }
        
	}
    return (
        <div>
            <PageHeader
				className="site-page-header"
				onBack={() => history.goBack()}
				title="Title"
				subTitle="This is a subtitle"
			/>
            <Skeleton loading={productInfo.loading} active>
                <div>
                    <div>
                    
                            <Carousel arrows {...settings} style={{width:'400px',marginLeft:'50px'}}>
                            {productInfo.images.map((el)=>{return(
                                
                                <Image
                                    width={200}
                                    src={el}
                                    />
                            )})}
                            </Carousel>    
                    </div>
                    <p>{productInfo.name||''}</p>
                    <p>Опис</p>
                    <p>{productInfo.info||'Немає'}</p>
                    <p>Ціна</p>
                    <p>{productInfo.price||'Немає'}</p>
					<p>Властивості</p>
                    <p>{productInfo.producer||'Немає'}</p>
                    {productInfo.properties.map((el, i) => (
                        <li key={i}>
                            <span>key: {el.property} Name: {el.value}</span>
                        </li>
                    ))}   
                </div>
                <div>
                    <Button size='default'  onClick={()=>addBuy(productInfo.id,user.user.bucketProducts)}>Buy</Button>
                    {user.user.auth?
                    <Button size='default' onClick={()=>addLike(productInfo.id,user.user.likeProducts)} loading={user.loadingLike}>Like</Button>
                    :<></>}
                </div>   
            </Skeleton>
            
        </div>
    )
}

  const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'red' }}
        onClick={onClick}
      />
    )
  }
  
  const SamplePrevArrow = props => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'green' }}
        onClick={onClick}
      />
    )
  }
  
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

Product.whyDidYouRender = true
export default Product