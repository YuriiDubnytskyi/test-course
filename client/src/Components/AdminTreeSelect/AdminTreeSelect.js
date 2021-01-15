import React from 'react'
import { TreeSelect } from 'antd';

const { TreeNode } = TreeSelect;

const AdminTreeSelect = (props) => {
  console.log('render+AdminTreeSelect')
    return (
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={props.valueTree}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={props.onChangeTree}
      >
        {props.productTitleList.productTitleList.map((el,i)=>{
            return(
            <TreeNode value={el.idProductTitle} title={el.productTitle}>
                {el.subTitle.map((el,i)=>{
                     return <TreeNode value={el.idProductSubTitle} title={el.productSubTitle} />
                })}
            </TreeNode>
            )
        })}
        </TreeSelect>
            
        
    );
  
}
AdminTreeSelect.whyDidYouRender = true
export default AdminTreeSelect