import React,{useState,useEffect} from 'react'
import './Admin.css'
import { Tabs } from 'antd';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux' 
import AdminProductMain from './../../Components/AdminProductMain/AdminProductMain'
import AdminSubProduct from './../../Components/AdminSubProduct/AdminSubProduct'
import AdminProductInfo from './../../Components/AdminProductInfo/AdminProductInfo'
import AdminNews from './../../Components/AdminNews/AdminNews'
import AdminUpdatePanel from './../../Components/AdminUpdatePanel/AdminUpdatePanel'
import {fetchAddProduct,
    fetchAddSubProduct,
    addProductFail,
    addSubProductFail,
    okSubProductSuccess,
    okProductSuccess,
} from './../../store/actions/actionsTitle'
import {
    fetchAddProductInfo,
    okProductInfoSuccess,
    addProductInfoFail
} from './../../store/actions/actionList'
import {
    okProductDeleteSuccess,
    okProductUpdateSuccess
} from './../../store/actions/actionAdminFullData'
import {okNewsSuccess,fetchAddNews} from './../../store/actions/actionNews'
import {fetchGetFullData} from './../../store/actions/actionAdminFullData'
import {useHistory} from 'react-router-dom'
import {isIdMainExist,isIdSubMainExist,isIdProductExist} from './../../Services/admin.service'
import {Success} from './../../Components/Modal/Modal'
import {featchUpdateProduct,fetchDeleteProduct} from './../../store/actions/actionAdminFullData'


const { TabPane } = Tabs;
const Admin = () => {
    console.log('render+Admin')
    const admin = useSelector(state => state.user.user.admin)
    const history = useHistory()
    useEffect(()=>{
        if(!admin){
            history.push('/')
        }
    },[])
    const productTitleList = useSelector(state => state.productTitle)
    const productList = useSelector(state => state.productList)

    const dispatch = useDispatch()
    const onFinishAddProductMain = (values) => {
        console.log('Success:', values);
        if(!isIdMainExist(productTitleList.productTitleList,values.idProductTitle)){
            dispatch(addProductFail('This id exist'))
        }else{
            dispatch(fetchAddProduct(values.productTitle,values.idProductTitle))
        }
        
    };

    const onFinishFailedAddProductMain = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [idProductHandle,setIdProductHandler] = useState(0)
    const [idSubProductHandle,setIdSubProductHandler] = useState(0)
    
    const onFinishAddSubProduct = (values) => {
        console.log('Success:', values);
        if(idProductHandle === 0){
            dispatch(addSubProductFail('Please choose Main Section'))
        }else if(!isIdSubMainExist(productTitleList.productTitleList,values.idProductSubTitle)){
            dispatch(addSubProductFail('This id exist'))
        }else{
            dispatch(fetchAddSubProduct(values.productSubTitle,values.idProductSubTitle,idProductHandle))
        }
    };

    const onFinishFailedAddSubProduct = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleTitleChange = (value) => {
        setIdProductHandler(value)
    }
    const handleSubTitleChange = (value) => {
        setIdSubProductHandler(value)
    }
    const [valueTree,setValueTree] = useState(undefined)
    const [properties,setProperties] = useState([])
    const [imageSrc,setImageSrc] = useState([])
    const [folderName,setFolderName] = useState('')

    const setImages = (imagesArray) =>{
        let arr = []

        let data
        imagesArray.forEach((el,i)=>{
            data = new FormData()
            data.append('file',el.originFileObj)
            data.append('upload_preset','diploma')
            data.append('folder',folderName)
            data.append('tags',folderName)
            axios.post('',data).then((res)=>{
                console.log(res)
                arr.push(res.data.url)
                setImageSrc(arr)
            })
        })
        console.log(arr)
    }
    const onFinishAddProductInfo = (values) => {
        console.log('Success:', values,valueTree,properties);
        
        if(!isIdProductExist(productTitleList.productTitleList,valueTree)){
            dispatch(addProductInfoFail('This id exist'))
        }else{
            console.log(imageSrc)
            dispatch(fetchAddProductInfo({
                name:values.name,
                price:values.price,
                info:values.info,
                producer:values.producer,
                properties:properties.properties,
                idProduct:values.idProduct,
                idWereHouse:values.idProduct,
                idSubProduct:valueTree,
                image:imageSrc
            }))
        }
    };

    const onFinishFailedAddProductInfo = (errorInfo) => {
        console.log('Failed:', errorInfo);
        console.log(imageSrc)
    };
    
    const onChangeTree = (value) =>{
        setValueTree(value)
    }

    const onFinishProperty = values => {
        setProperties(values)
    };

    const okSuccessT = () =>{
        dispatch(okProductSuccess())
    }
    const okSuccessST = () =>{
        dispatch(okSubProductSuccess())
    }
    const okSuccessI = () =>{
        dispatch(okProductInfoSuccess())
    }
    const okSuccessN = () =>{
        dispatch(okNewsSuccess())
    }
    const okSuccessUpdate = () =>{
        dispatch(okProductUpdateSuccess())
    }
    const okSuccessDelete = () =>{
        dispatch(okProductDeleteSuccess())
    }
    
    const news = useSelector(state => state.news)

    const onFinishNews = (values) => {
        console.log('Success:', values);
        dispatch(fetchAddNews(
            {
                title:values.title,
                description:values.description,
                time:new Date()
            }))
    }


    const onFinishFailedNews = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const dataFull = useSelector(state => state.dataFull)
    const onFinishGetFullData = (values) => {
        console.log('Success:', values);
        dispatch(fetchGetFullData())
    }


    const onFinishGetFullDataFail = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [valueTreeUp,setValueTreeUp] = useState(undefined)
    const [dataItem,setDataItem] = useState('')
    const [dataProperty,setDataProperty] = useState('')
    const [updateProperty,setUpdateProperty] = useState([])
    const [dataStorage,setDataStorage] = useState('')
    const [count,setCount] = useState('')

    const onChangeTreeUp = (value) =>{
		setDataItem({})
		setValueTreeUp(value)
		
		dataFull.dataFull.map(el => {
			el.subTitle.map(el=>{
				el.product.map(el=>{
					if(el.idProduct == value){
						setDataItem({
							productDetail:el.productDetail[0]
						})
						setDataStorage({
							storage:el.productWereHouse[0]
						})
						setDataProperty(el.productDetail[0].properties)
					}
				})
				
			})
		})
		
    }
    const onFinishPropertyUp = (values) =>{
		let arr =[]
		for (let i=0;;i++){
			if(values['property'+i] === undefined){
				break
			}else{
				arr.push({
					property:values['property'+i],
					value:values['value'+i]
				})
			}
		}
		setUpdateProperty([...updateProperty,...arr])
	}
	const onFinishItemUp = (values) =>{
		console.log(values)
		console.log(updateProperty)
		console.log(valueTreeUp)
		console.log(count)
		dispatch(featchUpdateProduct({values,updateProperty,valueTreeUp,count}))
	}
	const onFinishPropertyNewUp = (values) =>{
		setUpdateProperty([...updateProperty,...values.properties])
	}
	const onFinishCountUp = (values) =>{
		setCount(values.count)
	}
	const onFinishDeleteUp = () =>{
		dispatch(fetchDeleteProduct(valueTreeUp))
	}
    return (
            <div className="card-container">
            <Tabs type="card">
                <TabPane tab="ProductTitle" key="1">
                    <AdminProductMain
                        productTitleList={productTitleList} 
                        onFinishFailedAddProductMain={onFinishFailedAddProductMain} 
                        onFinishAddProductMain={onFinishAddProductMain}
                        success = {() => Success()}
                        okSuccess = {okSuccessT}
                        />
                </TabPane>
                <TabPane tab="ProductSubTitle" key="2">
                    <AdminSubProduct
                        productTitleList={productTitleList}
                        handleTitleChange={handleTitleChange}
                        onFinishAddSubProduct={onFinishAddSubProduct} 
                        onFinishFailedAddSubProduct={onFinishFailedAddSubProduct}
                        success = {() => Success()}
                        okSuccess = {okSuccessST}
                    />
                </TabPane>
                <TabPane tab="ProductInfo" key="3">
                    <AdminProductInfo
                        valueTree={valueTree}
                        onChangeTree={onChangeTree}
                        productTitleList={productTitleList}
                        productList={productList}
                        handleSubTitleChange={handleSubTitleChange}
                        onFinishAddProductInfo={onFinishAddProductInfo} 
                        onFinishFailedAddProductInfo={onFinishFailedAddProductInfo}
                        onFinishProperty={onFinishProperty}
                        success = {() => Success()}
                        okSuccess = {okSuccessI}
                        setImages={setImages}
                        folderName={folderName}
                        setFolderName={setFolderName}
                    />
                </TabPane>
                <TabPane tab="News" key="4">
                    <AdminNews
                        news={news} 
                        onFinishFailedNews={onFinishFailedNews} 
                        onFinishNews={onFinishNews}
                        success = {() => Success()}
                        okSuccess = {okSuccessN}
                    />
                </TabPane>
                <TabPane tab="Update" key="5">
                    <AdminUpdatePanel
                        dataFull={dataFull}
                        onFinishGetFullDataFail={onFinishGetFullDataFail} 
                        onFinishGetFullData={onFinishGetFullData}
                        success = {() => Success()}
                        okSuccessUpdate={okSuccessUpdate}
                        okSuccessDelete={okSuccessDelete}


                        valueTree={valueTreeUp}
                        setValueTree={setValueTreeUp}
                        dataItem={dataItem}
                        setDataItem={setDataItem}
                        dataProperty={dataProperty}
                        setDataProperty={setDataProperty}
                        updateProperty={updateProperty}
                        setUpdateProperty={setUpdateProperty}
                        dataStorage={dataStorage}
                        setDataStorage={setDataStorage}
                        count={count}
                        setCount={setCount}
                        onChangeTreeUp={onChangeTreeUp}
                        onFinishPropertyUp={onFinishPropertyUp}
                        onFinishItemUp={onFinishItemUp}
                        onFinishPropertyNewUp={onFinishPropertyNewUp}
                        onFinishCountUp={onFinishCountUp}
                        onFinishDeleteUp={onFinishDeleteUp}
                    />
                </TabPane>
                
            </Tabs>
        </div>
    )
}

Admin.whyDidYouRender = true
export default Admin
