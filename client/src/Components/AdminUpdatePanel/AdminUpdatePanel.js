import React,{useState} from 'react'
import {featchUpdateProduct,fetchDeleteProduct} from './../../store/actions/actionAdminFullData'

import {useDispatch} from 'react-redux' 
import AdminUpdatePanelData from './AdminUpdatePanelData/AdminUpdatePanelData'
import AdminUpdatePanelTree from './AdminUpdatePanelTree/AdminUpdatePanelTree'
import AdminUpdatePanelProductInfo from './AdminUpdatePanelProductInfo/AdminUpdatePanelProductInfo'
import AdminUpdatePanelExistProperties from './AdminUpdatePanelExistProperties/AdminUpdatePanelExistProperties'
import AdminUpdatePanelCount from './AdminUpdatePanelCount/AdminUpdatePanelCount'
import AdminUpdatePanelDelete from './AdminUpdatePanelDelete/AdminUpdatePanelDelete'
import AdminProductProperties from './../AdminProductProperties/AdminProductProperties'

export default function AdminUpdatePanel(props) {
	console.log('render+AdminUpdatePanel')

//   const [valueTree,setValueTree] = useState(undefined)
//   const [dataItem,setDataItem] = useState('')
//   const [dataProperty,setDataProperty] = useState('')
//   const [updateProperty,setUpdateProperty] = useState([])
//   const [dataStorage,setDataStorage] = useState('')
//   const [count,setCount] = useState('')

  const dispatch = useDispatch()
	
//   const onChangeTree = (value) =>{
// 		setDataItem({})
// 		setValueTree(value)
		
// 		props.dataFull.dataFull.map(el => {
// 			el.subTitle.map(el=>{
// 				el.product.map(el=>{
// 					if(el.idProduct == value){
// 						setDataItem({
// 							productDetail:el.productDetail[0]
// 						})
// 						setDataStorage({
// 							storage:el.productWereHouse[0]
// 						})
// 						setDataProperty(el.productDetail[0].properties)
// 					}
// 				})
				
// 			})
// 		})
		
// 	}
	// const onFinishProperty = (values) =>{
	// 	let arr =[]
	// 	for (let i=0;;i++){
	// 		if(values['property'+i] === undefined){
	// 			break
	// 		}else{
	// 			arr.push({
	// 				property:values['property'+i],
	// 				value:values['value'+i]
	// 			})
	// 		}
	// 	}
	// 	setUpdateProperty([...updateProperty,...arr])
	// }
	// const onFinishItem = (values) =>{
	// 	console.log(values)
	// 	console.log(updateProperty)
	// 	console.log(valueTree)
	// 	console.log(count)
	// 	dispatch(featchUpdateProduct({values,updateProperty,valueTree,count}))
	// }
	// const onFinishPropertyNew = (values) =>{
	// 	setUpdateProperty([...updateProperty,...values.properties])
	// }
	// const onFinishCount = (values) =>{
	// 	setCount(values.count)
	// }
	// const onFinishDelete = () =>{
	// 	dispatch(fetchDeleteProduct(valueTree))
	// }

    return (
        <div>
			<AdminUpdatePanelData
				onFinishGetFullData={props.onFinishGetFullData}
				onFinishGetFullDataFail={props.onFinishGetFullDataFail}
				dataFull={props.dataFull}
				setValueTree={props.setValueTree}
			/>
        
			<AdminUpdatePanelTree
				valueTree={props.valueTree}
				onChangeTree={props.onChangeTreeUp}
				dataFull={props.dataFull}
			/>
            

			{props.valueTree===undefined?<></>:
				<div>
					<AdminUpdatePanelProductInfo
						onFinishItem={props.onFinishItemUp}
						dataItem={props.dataItem}
						dataFull={props.dataFull}
						success={props.success}
						okSuccessUpdate={props.okSuccessUpdate}
					/>
				
					<AdminUpdatePanelExistProperties
						onFinishProperty={props.onFinishPropertyUp}
						dataProperty={props.dataProperty}
					/>
				
					<AdminProductProperties
						onFinishProperty={props.onFinishPropertyNewUp}
					/>
					<AdminUpdatePanelCount
						onFinishCount={props.onFinishCountUp}
						dataStorage={props.dataStorage}
					/>
					
					<AdminUpdatePanelDelete
						onFinishDelete={props.onFinishDeleteUp}
						success={props.success}
						okSuccessDelete={props.okSuccessDelete}
						dataFull={props.dataFull}
					/>
			</div>
			}
        </div>
    )
}
