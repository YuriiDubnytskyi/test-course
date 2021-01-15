import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import AdminTreeSelect from './../AdminTreeSelect/AdminTreeSelect'
import AdminProductProperties from './../AdminProductProperties/AdminProductProperties'
import AdminFormProperties from './../AdminFormProperties/AdminFormProperties'
import AdminImageLoader from './../AdminImageLoader/AdminImageLoader'

import './AdminProductInfo.css'
const { Option } = Select;
const layout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 22,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };


const AdminProductInfo = (props) => {
    console.log('render+AdminProductInfo')
    return (
        <div>
            <AdminTreeSelect
                valueTree={props.valueTree}
                onChangeTree={props.onChangeTree}
                productTitleList={props.productTitleList}
            />

            <div className='form_container'>
            <AdminFormProperties
				productList={props.productList}
				onFinishAddProductInfo={props.onFinishAddProductInfo}
				onFinishFailedAddProductInfo={props.onFinishFailedAddProductInfo}
        success={props.success}
        okSuccess={props.okSuccess}
            />
            <AdminProductProperties
            	onFinishProperty={props.onFinishProperty}
            />  

            </div>
            <div>
                <AdminImageLoader
                  setImages={props.setImages}
                  folderName={props.folderName}
                  setFolderName={props.setFolderName}
                />
            </div>  
        </div>  
    )
}

AdminProductInfo.whyDidYouRender = true
export default AdminProductInfo