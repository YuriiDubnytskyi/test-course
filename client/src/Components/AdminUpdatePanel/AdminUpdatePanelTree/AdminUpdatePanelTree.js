import React from 'react'
import { TreeSelect } from 'antd';
const { TreeNode } = TreeSelect;

export default function AdminUpdatePanelTree(props) {
    console.log('render+AdminUpdatePanelTree')
    return (
        <div>
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
                {props.dataFull.dataFull.map((el,i)=>{
                    return(
                    <TreeNode value={el.idProductTitle} title={el.productTitle}>
                        {el.subTitle.map((el,i)=>{
                            return (<TreeNode value={el.idProductSubTitle} title={el.productSubTitle} >
                                {el.product.map((el,i)=>{
                                  return <TreeNode value={el.idProduct} title={el.name}/>
                                })}
                              </TreeNode>)
                        })}
                    </TreeNode>
                    )
                })}
                </TreeSelect>
        </div>
    )
}
